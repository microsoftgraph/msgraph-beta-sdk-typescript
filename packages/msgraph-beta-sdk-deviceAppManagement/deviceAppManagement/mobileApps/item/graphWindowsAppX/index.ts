/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWindowsAppXFromDiscriminatorValue, type WindowsAppX } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, AssignmentsRequestBuilderUriTemplate, type AssignmentsRequestBuilder } from './assignments/';
import { CategoriesRequestBuilderNavigationMetadata, CategoriesRequestBuilderRequestsMetadata, CategoriesRequestBuilderUriTemplate, type CategoriesRequestBuilder } from './categories/';
import { ContentVersionsRequestBuilderNavigationMetadata, ContentVersionsRequestBuilderRequestsMetadata, ContentVersionsRequestBuilderUriTemplate, type ContentVersionsRequestBuilder } from './contentVersions/';
import { RelationshipsRequestBuilderNavigationMetadata, RelationshipsRequestBuilderRequestsMetadata, RelationshipsRequestBuilderUriTemplate, type RelationshipsRequestBuilder } from './relationships/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to windowsAppX.
 */
export interface GraphWindowsAppXRequestBuilder extends BaseRequestBuilder<GraphWindowsAppXRequestBuilder> {
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.mobileApp entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the categories property of the microsoft.graph.mobileApp entity.
     */
    get categories(): CategoriesRequestBuilder;
    /**
     * Provides operations to manage the contentVersions property of the microsoft.graph.mobileLobApp entity.
     */
    get contentVersions(): ContentVersionsRequestBuilder;
    /**
     * Provides operations to manage the relationships property of the microsoft.graph.mobileApp entity.
     */
    get relationships(): RelationshipsRequestBuilder;
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.windowsAppX
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsAppX
     */
     get(requestConfiguration?: RequestConfiguration<GraphWindowsAppXRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsAppX | undefined>;
    /**
     * Get the item of type microsoft.graph.mobileApp as microsoft.graph.windowsAppX
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GraphWindowsAppXRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the item of type microsoft.graph.mobileApp as microsoft.graph.windowsAppX
 */
export interface GraphWindowsAppXRequestBuilderGetQueryParameters {
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
const GraphWindowsAppXRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GraphWindowsAppXRequestBuilderNavigationMetadata: Record<Exclude<keyof GraphWindowsAppXRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    assignments: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    categories: {
        uriTemplate: CategoriesRequestBuilderUriTemplate,
        requestsMetadata: CategoriesRequestBuilderRequestsMetadata,
        navigationMetadata: CategoriesRequestBuilderNavigationMetadata,
    },
    contentVersions: {
        uriTemplate: ContentVersionsRequestBuilderUriTemplate,
        requestsMetadata: ContentVersionsRequestBuilderRequestsMetadata,
        navigationMetadata: ContentVersionsRequestBuilderNavigationMetadata,
    },
    relationships: {
        uriTemplate: RelationshipsRequestBuilderUriTemplate,
        requestsMetadata: RelationshipsRequestBuilderRequestsMetadata,
        navigationMetadata: RelationshipsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphWindowsAppXRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsAppXFromDiscriminatorValue,
        queryParametersMapper: GraphWindowsAppXRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const GraphWindowsAppXRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.windowsAppX{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */