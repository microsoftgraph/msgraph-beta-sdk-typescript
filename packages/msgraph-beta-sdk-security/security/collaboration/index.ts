/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createCollaborationRootFromDiscriminatorValue, serializeCollaborationRoot, type CollaborationRoot } from '@microsoft/msgraph-beta-sdk/models/security/';
import { AnalyzedEmailsRequestBuilderNavigationMetadata, AnalyzedEmailsRequestBuilderRequestsMetadata, AnalyzedEmailsRequestBuilderUriTemplate, type AnalyzedEmailsRequestBuilder } from './analyzedEmails/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collaboration property of the microsoft.graph.security entity.
 */
export interface CollaborationRequestBuilder extends BaseRequestBuilder<CollaborationRequestBuilder> {
    /**
     * Provides operations to manage the analyzedEmails property of the microsoft.graph.security.collaborationRoot entity.
     */
    get analyzedEmails(): AnalyzedEmailsRequestBuilder;
    /**
     * Delete navigation property collaboration for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get collaboration from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CollaborationRoot
     */
     get(requestConfiguration?: RequestConfiguration<CollaborationRequestBuilderGetQueryParameters> | undefined) : Promise<CollaborationRoot | undefined>;
    /**
     * Update the navigation property collaboration in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CollaborationRoot
     */
     patch(body: CollaborationRoot, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CollaborationRoot | undefined>;
    /**
     * Delete navigation property collaboration for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get collaboration from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CollaborationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property collaboration in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: CollaborationRoot, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get collaboration from security
 */
export interface CollaborationRequestBuilderGetQueryParameters {
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
const CollaborationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CollaborationRequestBuilderNavigationMetadata: Record<Exclude<keyof CollaborationRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    analyzedEmails: {
        uriTemplate: AnalyzedEmailsRequestBuilderUriTemplate,
        requestsMetadata: AnalyzedEmailsRequestBuilderRequestsMetadata,
        navigationMetadata: AnalyzedEmailsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CollaborationRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createCollaborationRootFromDiscriminatorValue,
        queryParametersMapper: CollaborationRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCollaborationRootFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCollaborationRoot,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CollaborationRequestBuilderUriTemplate = "{+baseurl}/security/collaboration{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */