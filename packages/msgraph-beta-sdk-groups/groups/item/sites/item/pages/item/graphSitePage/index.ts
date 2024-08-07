/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSitePageFromDiscriminatorValue, type SitePage } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CanvasLayoutRequestBuilderNavigationMetadata, CanvasLayoutRequestBuilderRequestsMetadata, type CanvasLayoutRequestBuilder } from './canvasLayout/index.js';
// @ts-ignore
import { CreatedByUserRequestBuilderNavigationMetadata, CreatedByUserRequestBuilderRequestsMetadata, type CreatedByUserRequestBuilder } from './createdByUser/index.js';
// @ts-ignore
import { LastModifiedByUserRequestBuilderNavigationMetadata, LastModifiedByUserRequestBuilderRequestsMetadata, type LastModifiedByUserRequestBuilder } from './lastModifiedByUser/index.js';
// @ts-ignore
import { type WebPartsRequestBuilder, WebPartsRequestBuilderNavigationMetadata, WebPartsRequestBuilderRequestsMetadata } from './webParts/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to sitePage.
 */
export interface GraphSitePageRequestBuilder extends BaseRequestBuilder<GraphSitePageRequestBuilder> {
    /**
     * Provides operations to manage the canvasLayout property of the microsoft.graph.sitePage entity.
     */
    get canvasLayout(): CanvasLayoutRequestBuilder;
    /**
     * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
     */
    get createdByUser(): CreatedByUserRequestBuilder;
    /**
     * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
     */
    get lastModifiedByUser(): LastModifiedByUserRequestBuilder;
    /**
     * Provides operations to manage the webParts property of the microsoft.graph.sitePage entity.
     */
    get webParts(): WebPartsRequestBuilder;
    /**
     * Get the item of type microsoft.graph.baseSitePage as microsoft.graph.sitePage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SitePage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GraphSitePageRequestBuilderGetQueryParameters> | undefined) : Promise<SitePage | undefined>;
    /**
     * Get the item of type microsoft.graph.baseSitePage as microsoft.graph.sitePage
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GraphSitePageRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the item of type microsoft.graph.baseSitePage as microsoft.graph.sitePage
 */
export interface GraphSitePageRequestBuilderGetQueryParameters {
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
export const GraphSitePageRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/pages/{baseSitePage%2Did}/graph.sitePage{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GraphSitePageRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GraphSitePageRequestBuilderNavigationMetadata: Record<Exclude<keyof GraphSitePageRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    canvasLayout: {
        requestsMetadata: CanvasLayoutRequestBuilderRequestsMetadata,
        navigationMetadata: CanvasLayoutRequestBuilderNavigationMetadata,
    },
    createdByUser: {
        requestsMetadata: CreatedByUserRequestBuilderRequestsMetadata,
        navigationMetadata: CreatedByUserRequestBuilderNavigationMetadata,
    },
    lastModifiedByUser: {
        requestsMetadata: LastModifiedByUserRequestBuilderRequestsMetadata,
        navigationMetadata: LastModifiedByUserRequestBuilderNavigationMetadata,
    },
    webParts: {
        requestsMetadata: WebPartsRequestBuilderRequestsMetadata,
        navigationMetadata: WebPartsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphSitePageRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GraphSitePageRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSitePageFromDiscriminatorValue,
        queryParametersMapper: GraphSitePageRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
