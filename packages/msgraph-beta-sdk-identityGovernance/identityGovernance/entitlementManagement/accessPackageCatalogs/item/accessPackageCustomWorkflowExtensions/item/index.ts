/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCustomCalloutExtensionFromDiscriminatorValue, serializeCustomCalloutExtension, type CustomCalloutExtension } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageCustomWorkflowExtensions property of the microsoft.graph.accessPackageCatalog entity.
 */
export interface CustomCalloutExtensionItemRequestBuilder extends BaseRequestBuilder<CustomCalloutExtensionItemRequestBuilder> {
    /**
     * Delete navigation property accessPackageCustomWorkflowExtensions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an accessPackageAssignmentWorkflowExtension object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomCalloutExtension
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentworkflowextension-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CustomCalloutExtensionItemRequestBuilderGetQueryParameters> | undefined) : Promise<CustomCalloutExtension | undefined>;
    /**
     * Update the properties of an accessPackageAssignmentRequestWorkflowExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomCalloutExtension
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentrequestworkflowextension-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: CustomCalloutExtension, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CustomCalloutExtension | undefined>;
    /**
     * Delete navigation property accessPackageCustomWorkflowExtensions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an accessPackageAssignmentWorkflowExtension object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CustomCalloutExtensionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an accessPackageAssignmentRequestWorkflowExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     toPatchRequestInformation(body: CustomCalloutExtension, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an accessPackageAssignmentWorkflowExtension object.
 */
export interface CustomCalloutExtensionItemRequestBuilderGetQueryParameters {
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
const CustomCalloutExtensionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CustomCalloutExtensionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createCustomCalloutExtensionFromDiscriminatorValue,
        queryParametersMapper: CustomCalloutExtensionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCustomCalloutExtensionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCustomCalloutExtension,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CustomCalloutExtensionItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog%2Did}/accessPackageCustomWorkflowExtensions/{customCalloutExtension%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */