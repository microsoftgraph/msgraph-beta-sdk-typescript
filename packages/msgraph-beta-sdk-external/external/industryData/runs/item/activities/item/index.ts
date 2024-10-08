/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIndustryDataRunActivityFromDiscriminatorValue, type IndustryDataRunActivity } from '@microsoft/msgraph-beta-sdk/models/industryData/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ActivityRequestBuilderRequestsMetadata, type ActivityRequestBuilder } from './activity/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activities property of the microsoft.graph.industryData.industryDataRun entity.
 */
export interface IndustryDataRunActivityItemRequestBuilder extends BaseRequestBuilder<IndustryDataRunActivityItemRequestBuilder> {
    /**
     * Provides operations to manage the activity property of the microsoft.graph.industryData.industryDataRunActivity entity.
     */
    get activity(): ActivityRequestBuilder;
    /**
     * The set of activities performed during the run.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IndustryDataRunActivity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<IndustryDataRunActivityItemRequestBuilderGetQueryParameters> | undefined) : Promise<IndustryDataRunActivity | undefined>;
    /**
     * The set of activities performed during the run.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IndustryDataRunActivityItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The set of activities performed during the run.
 */
export interface IndustryDataRunActivityItemRequestBuilderGetQueryParameters {
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
export const IndustryDataRunActivityItemRequestBuilderUriTemplate = "{+baseurl}/external/industryData/runs/{industryDataRun%2Did}/activities/{industryDataRunActivity%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const IndustryDataRunActivityItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const IndustryDataRunActivityItemRequestBuilderNavigationMetadata: Record<Exclude<keyof IndustryDataRunActivityItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    activity: {
        requestsMetadata: ActivityRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IndustryDataRunActivityItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: IndustryDataRunActivityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIndustryDataRunActivityFromDiscriminatorValue,
        queryParametersMapper: IndustryDataRunActivityItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
