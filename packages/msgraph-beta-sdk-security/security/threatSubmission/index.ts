/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createThreatSubmissionRootFromDiscriminatorValue, serializeThreatSubmissionRoot, type ThreatSubmissionRoot } from '@microsoft/msgraph-beta-sdk/models/security/';
import { EmailThreatsRequestBuilderNavigationMetadata, EmailThreatsRequestBuilderRequestsMetadata, EmailThreatsRequestBuilderUriTemplate, type EmailThreatsRequestBuilder } from './emailThreats/';
import { EmailThreatSubmissionPoliciesRequestBuilderNavigationMetadata, EmailThreatSubmissionPoliciesRequestBuilderRequestsMetadata, EmailThreatSubmissionPoliciesRequestBuilderUriTemplate, type EmailThreatSubmissionPoliciesRequestBuilder } from './emailThreatSubmissionPolicies/';
import { FileThreatsRequestBuilderNavigationMetadata, FileThreatsRequestBuilderRequestsMetadata, FileThreatsRequestBuilderUriTemplate, type FileThreatsRequestBuilder } from './fileThreats/';
import { type UrlThreatsRequestBuilder, UrlThreatsRequestBuilderNavigationMetadata, UrlThreatsRequestBuilderRequestsMetadata, UrlThreatsRequestBuilderUriTemplate } from './urlThreats/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the threatSubmission property of the microsoft.graph.security entity.
 */
export interface ThreatSubmissionRequestBuilder extends BaseRequestBuilder<ThreatSubmissionRequestBuilder> {
    /**
     * Provides operations to manage the emailThreats property of the microsoft.graph.security.threatSubmissionRoot entity.
     */
    get emailThreats(): EmailThreatsRequestBuilder;
    /**
     * Provides operations to manage the emailThreatSubmissionPolicies property of the microsoft.graph.security.threatSubmissionRoot entity.
     */
    get emailThreatSubmissionPolicies(): EmailThreatSubmissionPoliciesRequestBuilder;
    /**
     * Provides operations to manage the fileThreats property of the microsoft.graph.security.threatSubmissionRoot entity.
     */
    get fileThreats(): FileThreatsRequestBuilder;
    /**
     * Provides operations to manage the urlThreats property of the microsoft.graph.security.threatSubmissionRoot entity.
     */
    get urlThreats(): UrlThreatsRequestBuilder;
    /**
     * Delete navigation property threatSubmission for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A threat submission sent to Microsoft; for example, a suspicious email threat, URL threat, or file threat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatSubmissionRoot
     */
     get(requestConfiguration?: RequestConfiguration<ThreatSubmissionRequestBuilderGetQueryParameters> | undefined) : Promise<ThreatSubmissionRoot | undefined>;
    /**
     * Update the navigation property threatSubmission in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatSubmissionRoot
     */
     patch(body: ThreatSubmissionRoot, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ThreatSubmissionRoot | undefined>;
    /**
     * Delete navigation property threatSubmission for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A threat submission sent to Microsoft; for example, a suspicious email threat, URL threat, or file threat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ThreatSubmissionRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property threatSubmission in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ThreatSubmissionRoot, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A threat submission sent to Microsoft; for example, a suspicious email threat, URL threat, or file threat.
 */
export interface ThreatSubmissionRequestBuilderGetQueryParameters {
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
const ThreatSubmissionRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ThreatSubmissionRequestBuilderNavigationMetadata: Record<Exclude<keyof ThreatSubmissionRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    emailThreats: {
        uriTemplate: EmailThreatsRequestBuilderUriTemplate,
        requestsMetadata: EmailThreatsRequestBuilderRequestsMetadata,
        navigationMetadata: EmailThreatsRequestBuilderNavigationMetadata,
    },
    emailThreatSubmissionPolicies: {
        uriTemplate: EmailThreatSubmissionPoliciesRequestBuilderUriTemplate,
        requestsMetadata: EmailThreatSubmissionPoliciesRequestBuilderRequestsMetadata,
        navigationMetadata: EmailThreatSubmissionPoliciesRequestBuilderNavigationMetadata,
    },
    fileThreats: {
        uriTemplate: FileThreatsRequestBuilderUriTemplate,
        requestsMetadata: FileThreatsRequestBuilderRequestsMetadata,
        navigationMetadata: FileThreatsRequestBuilderNavigationMetadata,
    },
    urlThreats: {
        uriTemplate: UrlThreatsRequestBuilderUriTemplate,
        requestsMetadata: UrlThreatsRequestBuilderRequestsMetadata,
        navigationMetadata: UrlThreatsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ThreatSubmissionRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createThreatSubmissionRootFromDiscriminatorValue,
        queryParametersMapper: ThreatSubmissionRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createThreatSubmissionRootFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeThreatSubmissionRoot,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ThreatSubmissionRequestBuilderUriTemplate = "{+baseurl}/security/threatSubmission{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */