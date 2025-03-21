/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserFromDiscriminatorValue, type User } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
 */
export interface CreatedByUserRequestBuilder extends BaseRequestBuilder<CreatedByUserRequestBuilder> {
    /**
     * Get createdByUser from sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<User>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CreatedByUserRequestBuilderGetQueryParameters> | undefined) : Promise<User | undefined>;
    /**
     * Get createdByUser from sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CreatedByUserRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get createdByUser from sites
 */
export interface CreatedByUserRequestBuilderGetQueryParameters {
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
export const CreatedByUserRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/getByPath(path='{path}')/createdByUser{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CreatedByUserRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CreatedByUserRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CreatedByUserRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserFromDiscriminatorValue,
        queryParametersMapper: CreatedByUserRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
