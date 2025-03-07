/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createChangeItemBaseFromDiscriminatorValue, serializeChangeItemBase, type ChangeItemBase } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the productChanges property of the microsoft.graph.identityContainer entity.
 */
export interface ChangeItemBaseItemRequestBuilder extends BaseRequestBuilder<ChangeItemBaseItemRequestBuilder> {
    /**
     * Delete navigation property productChanges for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents entry point for Microsoft Entra product changes and planned new features.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ChangeItemBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ChangeItemBaseItemRequestBuilderGetQueryParameters> | undefined) : Promise<ChangeItemBase | undefined>;
    /**
     * Update the navigation property productChanges in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ChangeItemBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ChangeItemBase, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ChangeItemBase | undefined>;
    /**
     * Delete navigation property productChanges for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents entry point for Microsoft Entra product changes and planned new features.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ChangeItemBaseItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property productChanges in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ChangeItemBase, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents entry point for Microsoft Entra product changes and planned new features.
 */
export interface ChangeItemBaseItemRequestBuilderGetQueryParameters {
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
export const ChangeItemBaseItemRequestBuilderUriTemplate = "{+baseurl}/identity/productChanges/{changeItemBase%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ChangeItemBaseItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ChangeItemBaseItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ChangeItemBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ChangeItemBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createChangeItemBaseFromDiscriminatorValue,
        queryParametersMapper: ChangeItemBaseItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ChangeItemBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createChangeItemBaseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeChangeItemBase,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
