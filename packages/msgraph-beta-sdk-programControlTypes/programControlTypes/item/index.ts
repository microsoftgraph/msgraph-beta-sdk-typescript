/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createProgramControlTypeFromDiscriminatorValue, serializeProgramControlType, type ProgramControlType } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of programControlType entities.
 */
export interface ProgramControlTypeItemRequestBuilder extends BaseRequestBuilder<ProgramControlTypeItemRequestBuilder> {
    /**
     * Delete entity from programControlTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get entity from programControlTypes by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProgramControlType
     */
     get(requestConfiguration?: RequestConfiguration<ProgramControlTypeItemRequestBuilderGetQueryParameters> | undefined) : Promise<ProgramControlType | undefined>;
    /**
     * Update entity in programControlTypes
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProgramControlType
     */
     patch(body: ProgramControlType, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ProgramControlType | undefined>;
    /**
     * Delete entity from programControlTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get entity from programControlTypes by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProgramControlTypeItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in programControlTypes
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ProgramControlType, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entity from programControlTypes by key
 */
export interface ProgramControlTypeItemRequestBuilderGetQueryParameters {
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
const ProgramControlTypeItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProgramControlTypeItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createProgramControlTypeFromDiscriminatorValue,
        queryParametersMapper: ProgramControlTypeItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createProgramControlTypeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeProgramControlType,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ProgramControlTypeItemRequestBuilderUriTemplate = "{+baseurl}/programControlTypes/{programControlType%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */