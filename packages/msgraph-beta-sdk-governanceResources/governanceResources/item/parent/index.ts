/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createGovernanceResourceFromDiscriminatorValue, type GovernanceResource } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the parent property of the microsoft.graph.governanceResource entity.
 */
export interface ParentRequestBuilder extends BaseRequestBuilder<ParentRequestBuilder> {
    /**
     * Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceResource
     */
     get(requestConfiguration?: RequestConfiguration<ParentRequestBuilderGetQueryParameters> | undefined) : Promise<GovernanceResource | undefined>;
    /**
     * Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ParentRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.
 */
export interface ParentRequestBuilderGetQueryParameters {
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
const ParentRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ParentRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGovernanceResourceFromDiscriminatorValue,
        queryParametersMapper: ParentRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const ParentRequestBuilderUriTemplate = "{+baseurl}/governanceResources/{governanceResource%2Did}/parent{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */