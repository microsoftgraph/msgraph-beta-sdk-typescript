/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAgreementAcceptanceFromDiscriminatorValue, serializeAgreementAcceptance, type AgreementAcceptance } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreementAcceptance entities.
 */
export interface AgreementAcceptanceItemRequestBuilder extends BaseRequestBuilder<AgreementAcceptanceItemRequestBuilder> {
    /**
     * Delete entity from agreementAcceptances
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get entity from agreementAcceptances by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementAcceptance
     */
     get(requestConfiguration?: RequestConfiguration<AgreementAcceptanceItemRequestBuilderGetQueryParameters> | undefined) : Promise<AgreementAcceptance | undefined>;
    /**
     * Update entity in agreementAcceptances
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementAcceptance
     */
     patch(body: AgreementAcceptance, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AgreementAcceptance | undefined>;
    /**
     * Delete entity from agreementAcceptances
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get entity from agreementAcceptances by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AgreementAcceptanceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in agreementAcceptances
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AgreementAcceptance, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entity from agreementAcceptances by key
 */
export interface AgreementAcceptanceItemRequestBuilderGetQueryParameters {
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AgreementAcceptanceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AgreementAcceptanceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAgreementAcceptanceFromDiscriminatorValue,
        queryParametersMapper: AgreementAcceptanceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAgreementAcceptanceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAgreementAcceptance,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AgreementAcceptanceItemRequestBuilderUriTemplate = "{+baseurl}/agreementAcceptances/{agreementAcceptance%2Did}{?%24select}";
/* tslint:enable */
/* eslint-enable */