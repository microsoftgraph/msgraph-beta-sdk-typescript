/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCompanyInformationFromDiscriminatorValue, serializeCompanyInformation, type CompanyInformation } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { PictureRequestBuilderRequestsMetadata, PictureRequestBuilderUriTemplate, type PictureRequestBuilder } from './picture/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the companyInformation property of the microsoft.graph.company entity.
 */
export interface CompanyInformationItemRequestBuilder extends BaseRequestBuilder<CompanyInformationItemRequestBuilder> {
    /**
     * Provides operations to manage the media for the financials entity.
     */
    get picture(): PictureRequestBuilder;
    /**
     * Get companyInformation from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CompanyInformation
     */
     get(requestConfiguration?: RequestConfiguration<CompanyInformationItemRequestBuilderGetQueryParameters> | undefined) : Promise<CompanyInformation | undefined>;
    /**
     * Update the navigation property companyInformation in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CompanyInformation
     */
     patch(body: CompanyInformation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CompanyInformation | undefined>;
    /**
     * Get companyInformation from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CompanyInformationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property companyInformation in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: CompanyInformation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get companyInformation from financials
 */
export interface CompanyInformationItemRequestBuilderGetQueryParameters {
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
const CompanyInformationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CompanyInformationItemRequestBuilderNavigationMetadata: Record<Exclude<keyof CompanyInformationItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    picture: {
        uriTemplate: PictureRequestBuilderUriTemplate,
        requestsMetadata: PictureRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CompanyInformationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCompanyInformationFromDiscriminatorValue,
        queryParametersMapper: CompanyInformationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCompanyInformationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCompanyInformation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CompanyInformationItemRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/companyInformation/{companyInformation%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */