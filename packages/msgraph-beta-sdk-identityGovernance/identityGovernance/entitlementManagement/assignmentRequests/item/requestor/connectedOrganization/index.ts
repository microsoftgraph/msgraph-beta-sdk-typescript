/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createConnectedOrganizationFromDiscriminatorValue, type ConnectedOrganization } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectedOrganization property of the microsoft.graph.accessPackageSubject entity.
 */
export interface ConnectedOrganizationRequestBuilder extends BaseRequestBuilder<ConnectedOrganizationRequestBuilder> {
    /**
     * The connected organization of the subject. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConnectedOrganization>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     get(requestConfiguration?: RequestConfiguration<ConnectedOrganizationRequestBuilderGetQueryParameters> | undefined) : Promise<ConnectedOrganization | undefined>;
    /**
     * The connected organization of the subject. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConnectedOrganizationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The connected organization of the subject. Read-only. Nullable.
 */
export interface ConnectedOrganizationRequestBuilderGetQueryParameters {
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
export const ConnectedOrganizationRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest%2Did}/requestor/connectedOrganization{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ConnectedOrganizationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConnectedOrganizationRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ConnectedOrganizationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createConnectedOrganizationFromDiscriminatorValue,
        queryParametersMapper: ConnectedOrganizationRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */