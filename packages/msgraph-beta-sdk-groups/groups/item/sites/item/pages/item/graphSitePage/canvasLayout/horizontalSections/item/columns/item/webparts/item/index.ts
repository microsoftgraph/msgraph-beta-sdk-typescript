/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWebPartFromDiscriminatorValue, serializeWebPart, type WebPart } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { GetPositionOfWebPartRequestBuilderRequestsMetadata, GetPositionOfWebPartRequestBuilderUriTemplate, type GetPositionOfWebPartRequestBuilder } from './getPositionOfWebPart/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the webparts property of the microsoft.graph.horizontalSectionColumn entity.
 */
export interface WebPartItemRequestBuilder extends BaseRequestBuilder<WebPartItemRequestBuilder> {
    /**
     * Provides operations to call the getPositionOfWebPart method.
     */
    get getPositionOfWebPart(): GetPositionOfWebPartRequestBuilder;
    /**
     * Delete navigation property webparts for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The collection of WebParts in this column.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WebPart
     */
     get(requestConfiguration?: RequestConfiguration<WebPartItemRequestBuilderGetQueryParameters> | undefined) : Promise<WebPart | undefined>;
    /**
     * Update the navigation property webparts in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WebPart
     */
     patch(body: WebPart, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WebPart | undefined>;
    /**
     * Delete navigation property webparts for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of WebParts in this column.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WebPartItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property webparts in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: WebPart, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of WebParts in this column.
 */
export interface WebPartItemRequestBuilderGetQueryParameters {
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
const WebPartItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WebPartItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WebPartItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    getPositionOfWebPart: {
        uriTemplate: GetPositionOfWebPartRequestBuilderUriTemplate,
        requestsMetadata: GetPositionOfWebPartRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WebPartItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createWebPartFromDiscriminatorValue,
        queryParametersMapper: WebPartItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWebPartFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWebPart,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WebPartItemRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/pages/{baseSitePage%2Did}/graph.sitePage/canvasLayout/horizontalSections/{horizontalSection%2Did}/columns/{horizontalSectionColumn%2Did}/webparts/{webPart%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */