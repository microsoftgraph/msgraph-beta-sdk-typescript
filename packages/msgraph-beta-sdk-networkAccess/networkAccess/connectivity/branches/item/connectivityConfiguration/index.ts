/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createBranchConnectivityConfigurationFromDiscriminatorValue, serializeBranchConnectivityConfiguration, type BranchConnectivityConfiguration } from '@microsoft/msgraph-beta-sdk/models/networkaccess/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { LinksRequestBuilderNavigationMetadata, LinksRequestBuilderRequestsMetadata, LinksRequestBuilderUriTemplate, type LinksRequestBuilder } from './links/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectivityConfiguration property of the microsoft.graph.networkaccess.branchSite entity.
 */
export interface ConnectivityConfigurationRequestBuilder extends BaseRequestBuilder<ConnectivityConfigurationRequestBuilder> {
    /**
     * Provides operations to manage the links property of the microsoft.graph.networkaccess.branchConnectivityConfiguration entity.
     * @deprecated The Branches API is deprecated and will stop returning data on January 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
    get links(): LinksRequestBuilder;
    /**
     * Delete navigation property connectivityConfiguration for networkAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @deprecated The Branches API is deprecated and will stop returning data on January 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the IPSec tunnel configuration required to establish a bidirectional communication link between your organization's router and the Microsoft gateway. This information is vital for configuring your router (customer premise equipment) after creating a deviceLink.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BranchConnectivityConfiguration
     * @deprecated The Branches API is deprecated and will stop returning data on January 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-branchconnectivityconfiguration-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ConnectivityConfigurationRequestBuilderGetQueryParameters> | undefined) : Promise<BranchConnectivityConfiguration | undefined>;
    /**
     * Update the navigation property connectivityConfiguration in networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BranchConnectivityConfiguration
     * @deprecated The Branches API is deprecated and will stop returning data on January 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
     patch(body: BranchConnectivityConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<BranchConnectivityConfiguration | undefined>;
    /**
     * Delete navigation property connectivityConfiguration for networkAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The Branches API is deprecated and will stop returning data on January 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the IPSec tunnel configuration required to establish a bidirectional communication link between your organization's router and the Microsoft gateway. This information is vital for configuring your router (customer premise equipment) after creating a deviceLink.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The Branches API is deprecated and will stop returning data on January 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConnectivityConfigurationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property connectivityConfiguration in networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The Branches API is deprecated and will stop returning data on January 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
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
        uriTemplate: LinksRequestBuilderUriTemplate,
        requestsMetadata: LinksRequestBuilderRequestsMetadata,
        navigationMetadata: LinksRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConnectivityConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createBranchConnectivityConfigurationFromDiscriminatorValue,
        queryParametersMapper: ConnectivityConfigurationRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createBranchConnectivityConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBranchConnectivityConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ConnectivityConfigurationRequestBuilderUriTemplate = "{+baseurl}/networkAccess/connectivity/branches/{branchSite%2Did}/connectivityConfiguration{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */