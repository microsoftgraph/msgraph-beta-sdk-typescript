/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createLongRunningOperationFromDiscriminatorValue, serializeLongRunningOperation, type LongRunningOperation } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.authentication entity.
 */
export interface LongRunningOperationItemRequestBuilder extends BaseRequestBuilder<LongRunningOperationItemRequestBuilder> {
    /**
     * Delete navigation property operations for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of an operation object. Currently these operations are generated by initiating a password reset using the reset password method. An operation object tells the caller about the current state of that password reset operation. Possible states include: Succeeded and Failed are terminal states.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LongRunningOperation
     * @see {@link https://learn.microsoft.com/graph/api/authenticationoperation-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<LongRunningOperationItemRequestBuilderGetQueryParameters> | undefined) : Promise<LongRunningOperation | undefined>;
    /**
     * Update the navigation property operations in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LongRunningOperation
     */
     patch(body: LongRunningOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<LongRunningOperation | undefined>;
    /**
     * Delete navigation property operations for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of an operation object. Currently these operations are generated by initiating a password reset using the reset password method. An operation object tells the caller about the current state of that password reset operation. Possible states include: Succeeded and Failed are terminal states.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LongRunningOperationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property operations in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: LongRunningOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of an operation object. Currently these operations are generated by initiating a password reset using the reset password method. An operation object tells the caller about the current state of that password reset operation. Possible states include: Succeeded and Failed are terminal states.
 */
export interface LongRunningOperationItemRequestBuilderGetQueryParameters {
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
const LongRunningOperationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LongRunningOperationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createLongRunningOperationFromDiscriminatorValue,
        queryParametersMapper: LongRunningOperationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createLongRunningOperationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLongRunningOperation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const LongRunningOperationItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/operations/{longRunningOperation%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */