/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createAnalyzedEmailCollectionResponseFromDiscriminatorValue, createAnalyzedEmailFromDiscriminatorValue, serializeAnalyzedEmail, type AnalyzedEmail, type AnalyzedEmailCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AnalyzedEmailItemRequestBuilderRequestsMetadata, AnalyzedEmailItemRequestBuilderUriTemplate, type AnalyzedEmailItemRequestBuilder } from './item/';
import { MicrosoftGraphSecurityRemediateRequestBuilderRequestsMetadata, MicrosoftGraphSecurityRemediateRequestBuilderUriTemplate, type MicrosoftGraphSecurityRemediateRequestBuilder } from './microsoftGraphSecurityRemediate/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the analyzedEmails property of the microsoft.graph.security.collaborationRoot entity.
 */
export interface AnalyzedEmailsRequestBuilder extends BaseRequestBuilder<AnalyzedEmailsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the remediate method.
     */
    get microsoftGraphSecurityRemediate(): MicrosoftGraphSecurityRemediateRequestBuilder;
    /**
     * Provides operations to manage the analyzedEmails property of the microsoft.graph.security.collaborationRoot entity.
     * @param analyzedEmailId The unique identifier of analyzedEmail
     * @returns a AnalyzedEmailItemRequestBuilder
     */
     byAnalyzedEmailId(analyzedEmailId: string) : AnalyzedEmailItemRequestBuilder;
    /**
     * Get analyzedEmails from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AnalyzedEmailCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AnalyzedEmailsRequestBuilderGetQueryParameters> | undefined) : Promise<AnalyzedEmailCollectionResponse | undefined>;
    /**
     * Create new navigation property to analyzedEmails for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AnalyzedEmail
     */
     post(body: AnalyzedEmail, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AnalyzedEmail | undefined>;
    /**
     * Get analyzedEmails from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AnalyzedEmailsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to analyzedEmails for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AnalyzedEmail, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get analyzedEmails from security
 */
export interface AnalyzedEmailsRequestBuilderGetQueryParameters {
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
const AnalyzedEmailsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AnalyzedEmailsRequestBuilderNavigationMetadata: Record<Exclude<keyof AnalyzedEmailsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAnalyzedEmailId: {
        uriTemplate: AnalyzedEmailItemRequestBuilderUriTemplate,
        requestsMetadata: AnalyzedEmailItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["analyzedEmail%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    microsoftGraphSecurityRemediate: {
        uriTemplate: MicrosoftGraphSecurityRemediateRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphSecurityRemediateRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AnalyzedEmailsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAnalyzedEmailCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AnalyzedEmailsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAnalyzedEmailFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAnalyzedEmail,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AnalyzedEmailsRequestBuilderUriTemplate = "{+baseurl}/security/collaboration/analyzedEmails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */