declare global {
    /**
     * userLanguage & : declare by legacy code: getLang()
     */
    interface Navigator {
        userLanguage: any;
        browserLanguage: any;
    }
    const T: new () => React.Component<ReactComponentProps, {}, any>;

    const StringeeSoftPhone: any;

    // for unit testing
    declare var resolveRendered: any;
    declare var currentNode: any;
    declare var stackState: any;

    interface Document {
        destroy: any;
    }

    const SyncedCron: any;

    export namespace Slingshot {
        export class Upload {
            constructor(uploadType: string, config?: any);

            send(file: any, callback: (error?: Error, url?: string) => void): void;
            progress(): number;
            xhr: XMLHttpRequest;
        }

        type FuncS3 = (...args: any) => any;

        interface IS3Storage {
            accessId: 'AWSAccessKeyId';
            secretKey: 'AWSSecretAccessKey';
            directiveMatch: {
                bucket: string;
                bucketUrl: string | FuncS3;
                region: any;
                AWSAccessKeyId: string;
                AWSSecretAccessKey: string;
                acl: any;
                key: string | FuncS3;
                expire: any;
                cacheControl?: string;
                contentDisposition?: string | null | FuncS3;
                authorize: () => boolean;
            };
        }

        const S3Storage: IS3Storage;

        const createDirective: (
            name: string,
            service: IS3Storage,
            options: Partial<IS3Storage['directiveMatch']>
        ) => any;
        const fileRestrictions: (name: string, restrictions: any) => any;
    }
}

declare module 'meteor/meteor' {
    namespace Meteor {
        const roles: Mongo.Collection<Document, Document>;

        interface Handlers {
            [key: string]: Mongo.Collection<Document, Document>;
        }

        interface PublishHandlers extends Handlers {}
        interface MethodHandlers extends Handlers {}
        interface Server {
            publish_handlers: PublishHandlers;
            method_handlers: MethodHandlers;
        }

        const server: Server;

        enum EIsoCode {
            VN = 'VN',
            TH = 'TH',
            ID = 'ID',
        }
        interface User {
            _id: string;
            username?: string | undefined;
            emails?: UserEmail[] | undefined;
            createdAt?: Date | undefined;
            profile?: UserProfile;
            services?: any;
            isoCode: EIsoCode;
            city: Array<string>;
            services: {
                twoFactorSecret?: any;
                password?: any;
                facebook?: any;
                google?: any;
                apple?: any;
            };
            profile: {
                name: string;
            };
        }
        function user(options?: { fields?: Mongo.FieldSpecifier | undefined }): User | null;
    }
}

export {};
