/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCredentialUserRegistrationDetailsCollectionResponseFromDiscriminatorValue, createCredentialUserRegistrationDetailsFromDiscriminatorValue, serializeCredentialUserRegistrationDetails, type CredentialUserRegistrationDetails, type CredentialUserRegistrationDetailsCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CredentialUserRegistrationDetailsItemRequestBuilderRequestsMetadata, CredentialUserRegistrationDetailsItemRequestBuilderUriTemplate, type CredentialUserRegistrationDetailsItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the credentialUserRegistrationDetails property of the microsoft.graph.reportRoot entity.
 */
export interface CredentialUserRegistrationDetailsRequestBuilder extends BaseRequestBuilder<CredentialUserRegistrationDetailsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The Reporting credentialUserRegistrationDetails API is deprecated and will stop returning data on June 30, 2024. Please use the new userRegistrationDetails API. as of 2023-06/credentialUserRegistrationDetails
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the credentialUserRegistrationDetails property of the microsoft.graph.reportRoot entity.
     * @param credentialUserRegistrationDetailsId The unique identifier of credentialUserRegistrationDetails
     * @returns a CredentialUserRegistrationDetailsItemRequestBuilder
     * @deprecated The Reporting credentialUserRegistrationDetails API is deprecated and will stop returning data on June 30, 2024. Please use the new userRegistrationDetails API. as of 2023-06/credentialUserRegistrationDetails
     */
     byCredentialUserRegistrationDetailsId(credentialUserRegistrationDetailsId: string) : CredentialUserRegistrationDetailsItemRequestBuilder;
    /**
     * Get a list of credentialUserRegistrationDetails objects for a given tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CredentialUserRegistrationDetailsCollectionResponse
     * @deprecated The Reporting credentialUserRegistrationDetails API is deprecated and will stop returning data on June 30, 2024. Please use the new userRegistrationDetails API. as of 2023-06/credentialUserRegistrationDetails
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-list-credentialuserregistrationdetails?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CredentialUserRegistrationDetailsRequestBuilderGetQueryParameters> | undefined) : Promise<CredentialUserRegistrationDetailsCollectionResponse | undefined>;
    /**
     * Create new navigation property to credentialUserRegistrationDetails for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CredentialUserRegistrationDetails
     * @deprecated The Reporting credentialUserRegistrationDetails API is deprecated and will stop returning data on June 30, 2024. Please use the new userRegistrationDetails API. as of 2023-06/credentialUserRegistrationDetails
     */
     post(body: CredentialUserRegistrationDetails, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CredentialUserRegistrationDetails | undefined>;
    /**
     * Get a list of credentialUserRegistrationDetails objects for a given tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The Reporting credentialUserRegistrationDetails API is deprecated and will stop returning data on June 30, 2024. Please use the new userRegistrationDetails API. as of 2023-06/credentialUserRegistrationDetails
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CredentialUserRegistrationDetailsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to credentialUserRegistrationDetails for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The Reporting credentialUserRegistrationDetails API is deprecated and will stop returning data on June 30, 2024. Please use the new userRegistrationDetails API. as of 2023-06/credentialUserRegistrationDetails
     */
     toPostRequestInformation(body: CredentialUserRegistrationDetails, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of credentialUserRegistrationDetails objects for a given tenant.
 */
export interface CredentialUserRegistrationDetailsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CredentialUserRegistrationDetailsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CredentialUserRegistrationDetailsRequestBuilderNavigationMetadata: Record<Exclude<keyof CredentialUserRegistrationDetailsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCredentialUserRegistrationDetailsId: {
        uriTemplate: CredentialUserRegistrationDetailsItemRequestBuilderUriTemplate,
        requestsMetadata: CredentialUserRegistrationDetailsItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["credentialUserRegistrationDetails%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CredentialUserRegistrationDetailsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCredentialUserRegistrationDetailsCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CredentialUserRegistrationDetailsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCredentialUserRegistrationDetailsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCredentialUserRegistrationDetails,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CredentialUserRegistrationDetailsRequestBuilderUriTemplate = "{+baseurl}/reports/credentialUserRegistrationDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */