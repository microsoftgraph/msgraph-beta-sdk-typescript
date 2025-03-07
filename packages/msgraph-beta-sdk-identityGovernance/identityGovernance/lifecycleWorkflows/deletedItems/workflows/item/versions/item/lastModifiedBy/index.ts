/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserFromDiscriminatorValue, type User } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { MailboxSettingsRequestBuilderRequestsMetadata, type MailboxSettingsRequestBuilder } from './mailboxSettings/index.js';
// @ts-ignore
import { ServiceProvisioningErrorsRequestBuilderNavigationMetadata, ServiceProvisioningErrorsRequestBuilderRequestsMetadata, type ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lastModifiedBy property of the microsoft.graph.identityGovernance.workflowBase entity.
 */
export interface LastModifiedByRequestBuilder extends BaseRequestBuilder<LastModifiedByRequestBuilder> {
    /**
     * The mailboxSettings property
     */
    get mailboxSettings(): MailboxSettingsRequestBuilder;
    /**
     * The serviceProvisioningErrors property
     */
    get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder;
    /**
     * The user who last modified the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<User>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<LastModifiedByRequestBuilderGetQueryParameters> | undefined) : Promise<User | undefined>;
    /**
     * The user who last modified the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LastModifiedByRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The user who last modified the workflow.
 */
export interface LastModifiedByRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const LastModifiedByRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}/versions/{workflowVersion%2DversionNumber}/lastModifiedBy{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const LastModifiedByRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const LastModifiedByRequestBuilderNavigationMetadata: Record<Exclude<keyof LastModifiedByRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    mailboxSettings: {
        requestsMetadata: MailboxSettingsRequestBuilderRequestsMetadata,
    },
    serviceProvisioningErrors: {
        requestsMetadata: ServiceProvisioningErrorsRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceProvisioningErrorsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LastModifiedByRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: LastModifiedByRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserFromDiscriminatorValue,
        queryParametersMapper: LastModifiedByRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
