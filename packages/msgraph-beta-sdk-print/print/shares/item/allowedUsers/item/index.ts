/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { MailboxSettingsRequestBuilderRequestsMetadata, MailboxSettingsRequestBuilderUriTemplate, type MailboxSettingsRequestBuilder } from './mailboxSettings/';
import { RefRequestBuilderRequestsMetadata, RefRequestBuilderUriTemplate, type RefRequestBuilder } from './ref/';
import { ServiceProvisioningErrorsRequestBuilderNavigationMetadata, ServiceProvisioningErrorsRequestBuilderRequestsMetadata, ServiceProvisioningErrorsRequestBuilderUriTemplate, type ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /print/shares/{printerShare-id}/allowedUsers/{user-id}
 */
export interface UserItemRequestBuilder extends BaseRequestBuilder<UserItemRequestBuilder> {
    /**
     * The mailboxSettings property
     */
    get mailboxSettings(): MailboxSettingsRequestBuilder;
    /**
     * Provides operations to manage the collection of print entities.
     */
    get ref(): RefRequestBuilder;
    /**
     * The serviceProvisioningErrors property
     */
    get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UserItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UserItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    mailboxSettings: {
        uriTemplate: MailboxSettingsRequestBuilderUriTemplate,
        requestsMetadata: MailboxSettingsRequestBuilderRequestsMetadata,
    },
    ref: {
        uriTemplate: RefRequestBuilderUriTemplate,
        requestsMetadata: RefRequestBuilderRequestsMetadata,
    },
    serviceProvisioningErrors: {
        uriTemplate: ServiceProvisioningErrorsRequestBuilderUriTemplate,
        requestsMetadata: ServiceProvisioningErrorsRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceProvisioningErrorsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const UserItemRequestBuilderUriTemplate = "{+baseurl}/print/shares/{printerShare%2Did}/allowedUsers/{user%2Did}";
/* tslint:enable */
/* eslint-enable */