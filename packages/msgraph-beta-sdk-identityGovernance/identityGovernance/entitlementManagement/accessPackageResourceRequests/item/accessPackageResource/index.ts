/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessPackageResourceFromDiscriminatorValue, type AccessPackageResource } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageResource property of the microsoft.graph.accessPackageResourceRequest entity.
 */
export interface AccessPackageResourceRequestBuilder extends BaseRequestBuilder<AccessPackageResourceRequestBuilder> {
    /**
     * Get accessPackageResource from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResource
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageResourceRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageResource | undefined>;
    /**
     * Get accessPackageResource from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageResourceRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get accessPackageResource from identityGovernance
 */
export interface AccessPackageResourceRequestBuilderGetQueryParameters {
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
const AccessPackageResourceRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageResourceRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageResourceFromDiscriminatorValue,
        queryParametersMapper: AccessPackageResourceRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessPackageResourceRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageResourceRequests/{accessPackageResourceRequest%2Did}/accessPackageResource{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */