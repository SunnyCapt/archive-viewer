import { IVKMessage, IVKUser, IVKGroup } from '@apidog/vk-typings';

export interface IArchiveRoot {
    meta: IArchiveMeta;
    data: IArchiveData;
}

export interface IArchiveMeta {
    v: string;
    peer: number;
    ownerId: number;
    owner?: {
        firstName: string;
        lastName: string;
    };
    d: number;
}

export type IArchiveData = IVKMessage[];

export type IHash<T> = Record<number, T>;

export type IUserTable = IHash<IVKUser | IVKGroup>;

/**
 * Тип информации о периоде
 */
export type IPeriodInfo = {
    year: number;
    month: number;
    count: number;
}

export enum TMessageViewFilter {
    ALL,
    WITH_ATTACHMENTS,
}

export interface IMessageViewSettings {
    showOnly: TMessageViewFilter;
    query?: string;
    year?: number;
    month?: number;
}
