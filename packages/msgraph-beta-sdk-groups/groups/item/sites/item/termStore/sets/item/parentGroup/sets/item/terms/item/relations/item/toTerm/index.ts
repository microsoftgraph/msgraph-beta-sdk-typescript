/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createTermFromDiscriminatorValue, type Term } from '@microsoft/msgraph-beta-sdk/models/termStore/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the toTerm property of the microsoft.graph.termStore.relation entity.
 */
export interface ToTermRequestBuilder extends BaseRequestBuilder<ToTermRequestBuilder> {
    /**
     * The to [term] of the relation. The term to which the relationship is defined.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Term
     */
     get(requestConfiguration?: RequestConfiguration<ToTermRequestBuilderGetQueryParameters> | undefined) : Promise<Term | undefined>;
    /**
     * The to [term] of the relation. The term to which the relationship is defined.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ToTermRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The to [term] of the relation. The term to which the relationship is defined.
 */
export interface ToTermRequestBuilderGetQueryParameters {
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
const ToTermRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ToTermRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTermFromDiscriminatorValue,
        queryParametersMapper: ToTermRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const ToTermRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/termStore/sets/{set%2Did}/parentGroup/sets/{set%2Did1}/terms/{term%2Did}/relations/{relation%2Did}/toTerm{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */