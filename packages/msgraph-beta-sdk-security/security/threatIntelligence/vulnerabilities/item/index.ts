/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createVulnerabilityFromDiscriminatorValue, serializeVulnerability, type Vulnerability } from '@microsoft/msgraph-beta-sdk/models/security/';
import { ArticlesRequestBuilderNavigationMetadata, ArticlesRequestBuilderRequestsMetadata, ArticlesRequestBuilderUriTemplate, type ArticlesRequestBuilder } from './articles/';
import { ComponentsRequestBuilderNavigationMetadata, ComponentsRequestBuilderRequestsMetadata, ComponentsRequestBuilderUriTemplate, type ComponentsRequestBuilder } from './components/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the vulnerabilities property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface VulnerabilityItemRequestBuilder extends BaseRequestBuilder<VulnerabilityItemRequestBuilder> {
    /**
     * Provides operations to manage the articles property of the microsoft.graph.security.vulnerability entity.
     */
    get articles(): ArticlesRequestBuilder;
    /**
     * Provides operations to manage the components property of the microsoft.graph.security.vulnerability entity.
     */
    get components(): ComponentsRequestBuilder;
    /**
     * Delete navigation property vulnerabilities for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a vulnerability object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Vulnerability
     * @see {@link https://learn.microsoft.com/graph/api/security-vulnerability-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<VulnerabilityItemRequestBuilderGetQueryParameters> | undefined) : Promise<Vulnerability | undefined>;
    /**
     * Update the navigation property vulnerabilities in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Vulnerability
     */
     patch(body: Vulnerability, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Vulnerability | undefined>;
    /**
     * Delete navigation property vulnerabilities for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a vulnerability object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VulnerabilityItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property vulnerabilities in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Vulnerability, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a vulnerability object.
 */
export interface VulnerabilityItemRequestBuilderGetQueryParameters {
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
const VulnerabilityItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const VulnerabilityItemRequestBuilderNavigationMetadata: Record<Exclude<keyof VulnerabilityItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    articles: {
        uriTemplate: ArticlesRequestBuilderUriTemplate,
        requestsMetadata: ArticlesRequestBuilderRequestsMetadata,
        navigationMetadata: ArticlesRequestBuilderNavigationMetadata,
    },
    components: {
        uriTemplate: ComponentsRequestBuilderUriTemplate,
        requestsMetadata: ComponentsRequestBuilderRequestsMetadata,
        navigationMetadata: ComponentsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VulnerabilityItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createVulnerabilityFromDiscriminatorValue,
        queryParametersMapper: VulnerabilityItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVulnerabilityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVulnerability,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const VulnerabilityItemRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/vulnerabilities/{vulnerability%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */