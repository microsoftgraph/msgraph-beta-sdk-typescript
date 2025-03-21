/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageAssignmentRequestFromDiscriminatorValue, serializeAccessPackageAssignmentRequest, type AccessPackageAssignmentRequest } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AccessPackageRequestBuilderRequestsMetadata, type AccessPackageRequestBuilder } from './accessPackage/index.js';
// @ts-ignore
import { AccessPackageAssignmentRequestBuilderRequestsMetadata, type AccessPackageAssignmentRequestBuilder } from './accessPackageAssignment/index.js';
// @ts-ignore
import { CancelRequestBuilderRequestsMetadata, type CancelRequestBuilder } from './cancel/index.js';
// @ts-ignore
import { ReprocessRequestBuilderRequestsMetadata, type ReprocessRequestBuilder } from './reprocess/index.js';
// @ts-ignore
import { RequestorRequestBuilderNavigationMetadata, RequestorRequestBuilderRequestsMetadata, type RequestorRequestBuilder } from './requestor/index.js';
// @ts-ignore
import { ResumeRequestBuilderRequestsMetadata, type ResumeRequestBuilder } from './resume/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageAssignmentRequests property of the microsoft.graph.accessPackageAssignment entity.
 */
export interface AccessPackageAssignmentRequestItemRequestBuilder extends BaseRequestBuilder<AccessPackageAssignmentRequestItemRequestBuilder> {
    /**
     * Provides operations to manage the accessPackage property of the microsoft.graph.accessPackageAssignmentRequest entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get accessPackage(): AccessPackageRequestBuilder;
    /**
     * Provides operations to manage the accessPackageAssignment property of the microsoft.graph.accessPackageAssignmentRequest entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get accessPackageAssignment(): AccessPackageAssignmentRequestBuilder;
    /**
     * Provides operations to call the cancel method.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get cancel(): CancelRequestBuilder;
    /**
     * Provides operations to call the reprocess method.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get reprocess(): ReprocessRequestBuilder;
    /**
     * Provides operations to manage the requestor property of the microsoft.graph.accessPackageAssignmentRequest entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get requestor(): RequestorRequestBuilder;
    /**
     * Provides operations to call the resume method.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get resume(): ResumeRequestBuilder;
    /**
     * Delete navigation property accessPackageAssignmentRequests for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get accessPackageAssignmentRequests from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentRequestItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageAssignmentRequest | undefined>;
    /**
     * Update the navigation property accessPackageAssignmentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     patch(body: AccessPackageAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageAssignmentRequest | undefined>;
    /**
     * Delete navigation property accessPackageAssignmentRequests for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get accessPackageAssignmentRequests from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentRequestItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property accessPackageAssignmentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toPatchRequestInformation(body: AccessPackageAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get accessPackageAssignmentRequests from identityGovernance
 */
export interface AccessPackageAssignmentRequestItemRequestBuilderGetQueryParameters {
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
export const AccessPackageAssignmentRequestItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment%2Did}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessPackageAssignmentRequestItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessPackageAssignmentRequestItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageAssignmentRequestItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    accessPackage: {
        requestsMetadata: AccessPackageRequestBuilderRequestsMetadata,
    },
    accessPackageAssignment: {
        requestsMetadata: AccessPackageAssignmentRequestBuilderRequestsMetadata,
    },
    cancel: {
        requestsMetadata: CancelRequestBuilderRequestsMetadata,
    },
    reprocess: {
        requestsMetadata: ReprocessRequestBuilderRequestsMetadata,
    },
    requestor: {
        requestsMetadata: RequestorRequestBuilderRequestsMetadata,
        navigationMetadata: RequestorRequestBuilderNavigationMetadata,
    },
    resume: {
        requestsMetadata: ResumeRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageAssignmentRequestItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessPackageAssignmentRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessPackageAssignmentRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentRequestFromDiscriminatorValue,
        queryParametersMapper: AccessPackageAssignmentRequestItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessPackageAssignmentRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageAssignmentRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
