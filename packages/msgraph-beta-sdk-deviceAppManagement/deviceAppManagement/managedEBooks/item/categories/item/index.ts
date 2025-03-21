/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedEBookCategoryFromDiscriminatorValue, type ManagedEBookCategory } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the categories property of the microsoft.graph.managedEBook entity.
 */
export interface ManagedEBookCategoryItemRequestBuilder extends BaseRequestBuilder<ManagedEBookCategoryItemRequestBuilder> {
    /**
     * The list of categories for this eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedEBookCategory>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedEBookCategoryItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedEBookCategory | undefined>;
    /**
     * The list of categories for this eBook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedEBookCategoryItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The list of categories for this eBook.
 */
export interface ManagedEBookCategoryItemRequestBuilderGetQueryParameters {
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
export const ManagedEBookCategoryItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/managedEBooks/{managedEBook%2Did}/categories/{managedEBookCategory%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedEBookCategoryItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedEBookCategoryItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ManagedEBookCategoryItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedEBookCategoryFromDiscriminatorValue,
        queryParametersMapper: ManagedEBookCategoryItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
