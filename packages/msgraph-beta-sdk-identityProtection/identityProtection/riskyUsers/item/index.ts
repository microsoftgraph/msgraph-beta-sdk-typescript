/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createRiskyUserFromDiscriminatorValue, serializeRiskyUser, type RiskyUser } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { HistoryRequestBuilderNavigationMetadata, HistoryRequestBuilderRequestsMetadata, HistoryRequestBuilderUriTemplate, type HistoryRequestBuilder } from './history/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the riskyUsers property of the microsoft.graph.identityProtectionRoot entity.
 */
export interface RiskyUserItemRequestBuilder extends BaseRequestBuilder<RiskyUserItemRequestBuilder> {
    /**
     * Provides operations to manage the history property of the microsoft.graph.riskyUser entity.
     */
    get history(): HistoryRequestBuilder;
    /**
     * Delete navigation property riskyUsers for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Users that are flagged as at-risk by Microsoft Entra ID Protection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyUser
     */
     get(requestConfiguration?: RequestConfiguration<RiskyUserItemRequestBuilderGetQueryParameters> | undefined) : Promise<RiskyUser | undefined>;
    /**
     * Update the navigation property riskyUsers in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyUser
     */
     patch(body: RiskyUser, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<RiskyUser | undefined>;
    /**
     * Delete navigation property riskyUsers for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Users that are flagged as at-risk by Microsoft Entra ID Protection.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RiskyUserItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property riskyUsers in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: RiskyUser, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Users that are flagged as at-risk by Microsoft Entra ID Protection.
 */
export interface RiskyUserItemRequestBuilderGetQueryParameters {
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
const RiskyUserItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const RiskyUserItemRequestBuilderNavigationMetadata: Record<Exclude<keyof RiskyUserItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    history: {
        uriTemplate: HistoryRequestBuilderUriTemplate,
        requestsMetadata: HistoryRequestBuilderRequestsMetadata,
        navigationMetadata: HistoryRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RiskyUserItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createRiskyUserFromDiscriminatorValue,
        queryParametersMapper: RiskyUserItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createRiskyUserFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRiskyUser,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RiskyUserItemRequestBuilderUriTemplate = "{+baseurl}/identityProtection/riskyUsers/{riskyUser%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */