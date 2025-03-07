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
 * Provides operations to manage the createdBy property of the microsoft.graph.identityGovernance.workflowBase entity.
 */
export interface CreatedByRequestBuilder extends BaseRequestBuilder<CreatedByRequestBuilder> {
    /**
     * The mailboxSettings property
     */
    get mailboxSettings(): MailboxSettingsRequestBuilder;
    /**
     * The serviceProvisioningErrors property
     */
    get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder;
    /**
     * The user who created the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<User>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CreatedByRequestBuilderGetQueryParameters> | undefined) : Promise<User | undefined>;
    /**
     * The user who created the workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CreatedByRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The user who created the workflow.
 */
export interface CreatedByRequestBuilderGetQueryParameters {
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
export const CreatedByRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow%2Did}/versions/{workflowVersion%2DversionNumber}/createdBy{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CreatedByRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CreatedByRequestBuilderNavigationMetadata: Record<Exclude<keyof CreatedByRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
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
export const CreatedByRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CreatedByRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserFromDiscriminatorValue,
        queryParametersMapper: CreatedByRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
