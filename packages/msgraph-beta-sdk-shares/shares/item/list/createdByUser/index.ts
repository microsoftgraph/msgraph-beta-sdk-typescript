/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserFromDiscriminatorValue, type User } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { MailboxSettingsRequestBuilderRequestsMetadata, MailboxSettingsRequestBuilderUriTemplate, type MailboxSettingsRequestBuilder } from './mailboxSettings/';
import { ServiceProvisioningErrorsRequestBuilderNavigationMetadata, ServiceProvisioningErrorsRequestBuilderRequestsMetadata, ServiceProvisioningErrorsRequestBuilderUriTemplate, type ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
 */
export interface CreatedByUserRequestBuilder extends BaseRequestBuilder<CreatedByUserRequestBuilder> {
    /**
     * The mailboxSettings property
     */
    get mailboxSettings(): MailboxSettingsRequestBuilder;
    /**
     * The serviceProvisioningErrors property
     */
    get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder;
    /**
     * Get createdByUser from shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of User
     */
     get(requestConfiguration?: RequestConfiguration<CreatedByUserRequestBuilderGetQueryParameters> | undefined) : Promise<User | undefined>;
    /**
     * Get createdByUser from shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CreatedByUserRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get createdByUser from shares
 */
export interface CreatedByUserRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CreatedByUserRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CreatedByUserRequestBuilderNavigationMetadata: Record<Exclude<keyof CreatedByUserRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    mailboxSettings: {
        uriTemplate: MailboxSettingsRequestBuilderUriTemplate,
        requestsMetadata: MailboxSettingsRequestBuilderRequestsMetadata,
    },
    serviceProvisioningErrors: {
        uriTemplate: ServiceProvisioningErrorsRequestBuilderUriTemplate,
        requestsMetadata: ServiceProvisioningErrorsRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceProvisioningErrorsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CreatedByUserRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserFromDiscriminatorValue,
        queryParametersMapper: CreatedByUserRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const CreatedByUserRequestBuilderUriTemplate = "{+baseurl}/shares/{sharedDriveItem%2Did}/list/createdByUser{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */