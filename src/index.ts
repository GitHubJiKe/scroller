import { throttle } from 'lodash-es'

export type Options = {
    throttleTime?: number;
    onScrollBottom?: (e: Event) => void;
    onScrollTop?: (e: Event) => void;
    onScroll?: (e: Event) => void;
    ele?: Element | string;
}

export default class EasyScrollBox {
    #ele: Element;
    #options: Options = { throttleTime: 500 };
    #func: ReturnType<typeof throttle> | undefined;

    constructor(options: Options) {
        if (!options.ele) {
            this.#ele = window.document.body
        } else {
            if (typeof options.ele === 'string') {
                const _ele = window.document.querySelector(options.ele);
                if (_ele) {
                    this.#ele = _ele
                } else {
                    throw new Error('not found target element in document,plaease check your ele param')
                }
            } else {
                this.#ele = options.ele;
            }
        }


        if (options) {
            this.#options = { ...this.#options, ...options }
        }


        this.addListener()
    }

    private addListener() {
        this.#func = throttle(this.onScroll.bind(this), this.#options.throttleTime)
        this.#ele.addEventListener('scroll', this.#func, false)
    }

    private onScroll(e: Event) {
        if (e && e.target) {
            this.#options.onScroll && this.#options.onScroll(e);
            // @ts-ignore
            const diff = e.target.scrollHeight - e.target.scrollTop;
            // @ts-ignore
            if (diff === e.target.scrollHeight) {
                this.#options.onScrollTop && this.#options.onScrollTop(e)
            }
            // @ts-ignore
            if (diff === e.target.clientHeight) {
                this.#options.onScrollBottom && this.#options.onScrollBottom(e)
            }
        }
    }

    removeEventListener() {
        if (this.#func) {
            this.#ele.removeEventListener('scroll', this.#func, false)
        }
    }

}
