/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMicrosoftTunnelSiteFromDiscriminatorValue, serializeMicrosoftTunnelSite, type MicrosoftTunnelSite } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { MicrosoftTunnelConfigurationRequestBuilderRequestsMetadata, MicrosoftTunnelConfigurationRequestBuilderUriTemplate, type MicrosoftTunnelConfigurationRequestBuilder } from './microsoftTunnelConfiguration/';
import { MicrosoftTunnelServersRequestBuilderNavigationMetadata, MicrosoftTunnelServersRequestBuilderRequestsMetadata, MicrosoftTunnelServersRequestBuilderUriTemplate, type MicrosoftTunnelServersRequestBuilder } from './microsoftTunnelServers/';
import { RequestUpgradeRequestBuilderRequestsMetadata, RequestUpgradeRequestBuilderUriTemplate, type RequestUpgradeRequestBuilder } from './requestUpgrade/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the microsoftTunnelSites property of the microsoft.graph.deviceManagement entity.
 */
export interface MicrosoftTunnelSiteItemRequestBuilder extends BaseRequestBuilder<MicrosoftTunnelSiteItemRequestBuilder> {
    /**
     * Provides operations to manage the microsoftTunnelConfiguration property of the microsoft.graph.microsoftTunnelSite entity.
     */
    get microsoftTunnelConfiguration(): MicrosoftTunnelConfigurationRequestBuilder;
    /**
     * Provides operations to manage the microsoftTunnelServers property of the microsoft.graph.microsoftTunnelSite entity.
     */
    get microsoftTunnelServers(): MicrosoftTunnelServersRequestBuilder;
    /**
     * Provides operations to call the requestUpgrade method.
     */
    get requestUpgrade(): RequestUpgradeRequestBuilder;
    /**
     * Delete navigation property microsoftTunnelSites for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Collection of MicrosoftTunnelSite settings associated with account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MicrosoftTunnelSite
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftTunnelSiteItemRequestBuilderGetQueryParameters> | undefined) : Promise<MicrosoftTunnelSite | undefined>;
    /**
     * Update the navigation property microsoftTunnelSites in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MicrosoftTunnelSite
     */
     patch(body: MicrosoftTunnelSite, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MicrosoftTunnelSite | undefined>;
    /**
     * Delete navigation property microsoftTunnelSites for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Collection of MicrosoftTunnelSite settings associated with account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftTunnelSiteItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property microsoftTunnelSites in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: MicrosoftTunnelSite, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of MicrosoftTunnelSite settings associated with account.
 */
export interface MicrosoftTunnelSiteItemRequestBuilderGetQueryParameters {
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
const MicrosoftTunnelSiteItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MicrosoftTunnelSiteItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MicrosoftTunnelSiteItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    microsoftTunnelConfiguration: {
        uriTemplate: MicrosoftTunnelConfigurationRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftTunnelConfigurationRequestBuilderRequestsMetadata,
    },
    microsoftTunnelServers: {
        uriTemplate: MicrosoftTunnelServersRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftTunnelServersRequestBuilderRequestsMetadata,
        navigationMetadata: MicrosoftTunnelServersRequestBuilderNavigationMetadata,
    },
    requestUpgrade: {
        uriTemplate: RequestUpgradeRequestBuilderUriTemplate,
        requestsMetadata: RequestUpgradeRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftTunnelSiteItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createMicrosoftTunnelSiteFromDiscriminatorValue,
        queryParametersMapper: MicrosoftTunnelSiteItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMicrosoftTunnelSiteFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMicrosoftTunnelSite,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftTunnelSiteItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */