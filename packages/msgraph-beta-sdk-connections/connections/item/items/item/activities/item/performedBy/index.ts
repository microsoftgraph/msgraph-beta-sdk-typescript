/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIdentityFromDiscriminatorValue, type Identity } from '@microsoft/msgraph-beta-sdk/models/externalConnectors/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the performedBy property of the microsoft.graph.externalConnectors.externalActivity entity.
 */
export interface PerformedByRequestBuilder extends BaseRequestBuilder<PerformedByRequestBuilder> {
    /**
     * Represents an identity used to identify who is responsible for the activity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Identity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PerformedByRequestBuilderGetQueryParameters> | undefined) : Promise<Identity | undefined>;
    /**
     * Represents an identity used to identify who is responsible for the activity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PerformedByRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Represents an identity used to identify who is responsible for the activity.
 */
export interface PerformedByRequestBuilderGetQueryParameters {
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
export const PerformedByRequestBuilderUriTemplate = "{+baseurl}/connections/{externalConnection%2Did}/items/{externalItem%2Did}/activities/{externalActivity%2Did}/performedBy{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PerformedByRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PerformedByRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PerformedByRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIdentityFromDiscriminatorValue,
        queryParametersMapper: PerformedByRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
