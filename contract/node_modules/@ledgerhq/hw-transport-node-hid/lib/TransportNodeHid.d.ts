import TransportNodeHidNoEvents from "@ledgerhq/hw-transport-node-hid-noevents";
import type { Observer, DescriptorEvent, Subscription } from "@ledgerhq/hw-transport";
/**
 * node-hid Transport implementation
 * @example
 * import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
 * ...
 * TransportNodeHid.create().then(transport => ...)
 */
export default class TransportNodeHid extends TransportNodeHidNoEvents {
    /**
     *
     */
    static isSupported: () => Promise<boolean>;
    /**
     *
     */
    static list: () => Promise<any>;
    /**
     *
     */
    static setListenDevicesDebounce: (delay: number) => void;
    /**
     *
     */
    static setListenDevicesPollingSkip: (conditionToSkip: () => boolean) => void;
    /**
     *
     */
    static setListenDevicesDebug: () => void;
    /**
     */
    static listen: (observer: Observer<DescriptorEvent<string | null | undefined>>) => Subscription;
    /**
     * if path="" is not provided, the library will take the first device
     */
    static open(path: string | null | undefined): Promise<TransportNodeHid>;
}
//# sourceMappingURL=TransportNodeHid.d.ts.map