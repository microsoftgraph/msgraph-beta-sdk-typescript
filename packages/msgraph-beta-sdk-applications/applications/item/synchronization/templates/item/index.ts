/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSynchronizationTemplateFromDiscriminatorValue, serializeSynchronizationTemplate, type SynchronizationTemplate } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { SchemaRequestBuilderNavigationMetadata, SchemaRequestBuilderRequestsMetadata, SchemaRequestBuilderUriTemplate, type SchemaRequestBuilder } from './schema/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
 */
export interface SynchronizationTemplateItemRequestBuilder extends BaseRequestBuilder<SynchronizationTemplateItemRequestBuilder> {
    /**
     * Provides operations to manage the schema property of the microsoft.graph.synchronizationTemplate entity.
     */
    get schema(): SchemaRequestBuilder;
    /**
     * Delete navigation property templates for applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Pre-configured synchronization settings for a particular application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplate
     */
     get(requestConfiguration?: RequestConfiguration<SynchronizationTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<SynchronizationTemplate | undefined>;
    /**
     * Update (override) the synchronization template associated with a given application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplate
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationtemplate-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: SynchronizationTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SynchronizationTemplate | undefined>;
    /**
     * Delete navigation property templates for applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Pre-configured synchronization settings for a particular application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SynchronizationTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update (override) the synchronization template associated with a given application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: SynchronizationTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Pre-configured synchronization settings for a particular application.
 */
export interface SynchronizationTemplateItemRequestBuilderGetQueryParameters {
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
const SynchronizationTemplateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SynchronizationTemplateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SynchronizationTemplateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    schema: {
        uriTemplate: SchemaRequestBuilderUriTemplate,
        requestsMetadata: SchemaRequestBuilderRequestsMetadata,
        navigationMetadata: SchemaRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SynchronizationTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createSynchronizationTemplateFromDiscriminatorValue,
        queryParametersMapper: SynchronizationTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
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
export const SynchronizationTemplateItemRequestBuilderUriTemplate = "{+baseurl}/applications/{application%2Did}/synchronization/templates/{synchronizationTemplate%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */