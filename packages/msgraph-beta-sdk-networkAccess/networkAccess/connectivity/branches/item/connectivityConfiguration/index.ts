/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createBranchConnectivityConfigurationFromDiscriminatorValue, serializeBranchConnectivityConfiguration, type BranchConnectivityConfiguration } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { LinksRequestBuilderNavigationMetadata, LinksRequestBuilderRequestsMetadata, type LinksRequestBuilder } from './links/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectivityConfiguration property of the microsoft.graph.networkaccess.branchSite entity.
 */
export interface ConnectivityConfigurationRequestBuilder extends BaseRequestBuilder<ConnectivityConfigurationRequestBuilder> {
    /**
     * Provides operations to manage the links property of the microsoft.graph.networkaccess.branchConnectivityConfiguration entity.
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess on 2023-12-19 and will be removed 2024-03-20
     */
    get links(): LinksRequestBuilder;
    /**
     * Delete navigation property connectivityConfiguration for networkAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess on 2023-12-19 and will be removed 2024-03-20
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the IPSec tunnel configuration required to establish a bidirectional communication link between your organization's router and the Microsoft gateway. This information is vital for configuring your router (customer premise equipment) after creating a deviceLink.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BranchConnectivityConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess on 2023-12-19 and will be removed 2024-03-20
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-branchconnectivityconfiguration-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ConnectivityConfigurationRequestBuilderGetQueryParameters> | undefined) : Promise<BranchConnectivityConfiguration | undefined>;
    /**
     * Update the navigation property connectivityConfiguration in networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BranchConnectivityConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess on 2023-12-19 and will be removed 2024-03-20
     */
     patch(body: BranchConnectivityConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<BranchConnectivityConfiguration | undefined>;
    /**
     * Delete navigation property connectivityConfiguration for networkAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess on 2023-12-19 and will be removed 2024-03-20
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the IPSec tunnel configuration required to establish a bidirectional communication link between your organization's router and the Microsoft gateway. This information is vital for configuring your router (customer premise equipment) after creating a deviceLink.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess on 2023-12-19 and will be removed 2024-03-20
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConnectivityConfigurationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property connectivityConfiguration in networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess on 2023-12-19 and will be removed 2024-03-20
     */
     toPatchRequestInformation(body: BranchConnectivityConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the IPSec tunnel configuration required to establish a bidirectional communication link between your organization's router and the Microsoft gateway. This information is vital for configuring your router (customer premise equipment) after creating a deviceLink.
 */
export interface ConnectivityConfigurationRequestBuilderGetQueryParameters {
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
export const ConnectivityConfigurationRequestBuilderUriTemplate = "{+baseurl}/networkAccess/connectivity/branches/{branchSite%2Did}/connectivityConfiguration{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ConnectivityConfigurationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ConnectivityConfigurationRequestBuilderNavigationMetadata: Record<Exclude<keyof ConnectivityConfigurationRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    links: {
        requestsMetadata: LinksRequestBuilderRequestsMetadata,
        navigationMetadata: LinksRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConnectivityConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ConnectivityConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ConnectivityConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBranchConnectivityConfigurationFromDiscriminatorValue,
        queryParametersMapper: ConnectivityConfigurationRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ConnectivityConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBranchConnectivityConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBranchConnectivityConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
