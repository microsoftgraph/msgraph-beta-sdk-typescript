/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSynchronizationTemplateCollectionResponseFromDiscriminatorValue, createSynchronizationTemplateFromDiscriminatorValue, serializeSynchronizationTemplate, type SynchronizationTemplate, type SynchronizationTemplateCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { SynchronizationTemplateItemRequestBuilderNavigationMetadata, SynchronizationTemplateItemRequestBuilderRequestsMetadata, SynchronizationTemplateItemRequestBuilderUriTemplate, type SynchronizationTemplateItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
 */
export interface TemplatesRequestBuilder extends BaseRequestBuilder<TemplatesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
     * @param synchronizationTemplateId The unique identifier of synchronizationTemplate
     * @returns a SynchronizationTemplateItemRequestBuilder
     */
     bySynchronizationTemplateId(synchronizationTemplateId: string) : SynchronizationTemplateItemRequestBuilder;
    /**
     * List the synchronization templates associated with a given application or service principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplateCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronization-list-templates?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TemplatesRequestBuilderGetQueryParameters> | undefined) : Promise<SynchronizationTemplateCollectionResponse | undefined>;
    /**
     * Create new navigation property to templates for applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplate
     */
     post(body: SynchronizationTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SynchronizationTemplate | undefined>;
    /**
     * List the synchronization templates associated with a given application or service principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TemplatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to templates for applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: SynchronizationTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List the synchronization templates associated with a given application or service principal.
 */
export interface TemplatesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TemplatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TemplatesRequestBuilderNavigationMetadata: Record<Exclude<keyof TemplatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySynchronizationTemplateId: {
        uriTemplate: SynchronizationTemplateItemRequestBuilderUriTemplate,
        requestsMetadata: SynchronizationTemplateItemRequestBuilderRequestsMetadata,
        navigationMetadata: SynchronizationTemplateItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["synchronizationTemplate%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TemplatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSynchronizationTemplateCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TemplatesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSynchronizationTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSynchronizationTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TemplatesRequestBuilderUriTemplate = "{+baseurl}/applications/{application%2Did}/synchronization/templates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */