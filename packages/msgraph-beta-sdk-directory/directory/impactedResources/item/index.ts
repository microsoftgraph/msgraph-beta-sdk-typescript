/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createImpactedResourceFromDiscriminatorValue, serializeImpactedResource, type ImpactedResource } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CompleteRequestBuilderRequestsMetadata, CompleteRequestBuilderUriTemplate, type CompleteRequestBuilder } from './complete/';
import { DismissRequestBuilderRequestsMetadata, DismissRequestBuilderUriTemplate, type DismissRequestBuilder } from './dismiss/';
import { PostponeRequestBuilderRequestsMetadata, PostponeRequestBuilderUriTemplate, type PostponeRequestBuilder } from './postpone/';
import { ReactivateRequestBuilderRequestsMetadata, ReactivateRequestBuilderUriTemplate, type ReactivateRequestBuilder } from './reactivate/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the impactedResources property of the microsoft.graph.directory entity.
 */
export interface ImpactedResourceItemRequestBuilder extends BaseRequestBuilder<ImpactedResourceItemRequestBuilder> {
    /**
     * Provides operations to call the complete method.
     */
    get complete(): CompleteRequestBuilder;
    /**
     * Provides operations to call the dismiss method.
     */
    get dismiss(): DismissRequestBuilder;
    /**
     * Provides operations to call the postpone method.
     */
    get postpone(): PostponeRequestBuilder;
    /**
     * Provides operations to call the reactivate method.
     */
    get reactivate(): ReactivateRequestBuilder;
    /**
     * Delete navigation property impactedResources for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get impactedResources from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImpactedResource
     */
     get(requestConfiguration?: RequestConfiguration<ImpactedResourceItemRequestBuilderGetQueryParameters> | undefined) : Promise<ImpactedResource | undefined>;
    /**
     * Update the navigation property impactedResources in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImpactedResource
     */
     patch(body: ImpactedResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImpactedResource | undefined>;
    /**
     * Delete navigation property impactedResources for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get impactedResources from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ImpactedResourceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property impactedResources in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ImpactedResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get impactedResources from directory
 */
export interface ImpactedResourceItemRequestBuilderGetQueryParameters {
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
const ImpactedResourceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ImpactedResourceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ImpactedResourceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    complete: {
        uriTemplate: CompleteRequestBuilderUriTemplate,
        requestsMetadata: CompleteRequestBuilderRequestsMetadata,
    },
    dismiss: {
        uriTemplate: DismissRequestBuilderUriTemplate,
        requestsMetadata: DismissRequestBuilderRequestsMetadata,
    },
    postpone: {
        uriTemplate: PostponeRequestBuilderUriTemplate,
        requestsMetadata: PostponeRequestBuilderRequestsMetadata,
    },
    reactivate: {
        uriTemplate: ReactivateRequestBuilderUriTemplate,
        requestsMetadata: ReactivateRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ImpactedResourceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createImpactedResourceFromDiscriminatorValue,
        queryParametersMapper: ImpactedResourceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createImpactedResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImpactedResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ImpactedResourceItemRequestBuilderUriTemplate = "{+baseurl}/directory/impactedResources/{impactedResource%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */