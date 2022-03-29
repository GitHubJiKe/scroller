export declare type Options = {
    throttleTime?: number;
    onScrollBottom?: (e: Event) => void;
    onScrollTop?: (e: Event) => void;
    onScroll?: (e: Event) => void;
    ele?: Element | string;
};
export default class EasyScrollBox {
    #private;
    constructor(options: Options);
    private addListener;
    private onScroll;
    removeEventListener(): void;
}
