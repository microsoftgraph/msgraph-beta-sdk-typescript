/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createInferenceClassificationOverrideFromDiscriminatorValue, serializeInferenceClassificationOverride, type InferenceClassificationOverride } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the overrides property of the microsoft.graph.inferenceClassification entity.
 */
export interface InferenceClassificationOverrideItemRequestBuilder extends BaseRequestBuilder<InferenceClassificationOverrideItemRequestBuilder> {
    /**
     * Delete a focused Inbox override specified by its ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassificationoverride-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassificationOverride
     */
     get(requestConfiguration?: RequestConfiguration<InferenceClassificationOverrideItemRequestBuilderGetQueryParameters> | undefined) : Promise<InferenceClassificationOverride | undefined>;
    /**
     * Change the classifyAs field of a focused Inbox override as specified. You cannot use PATCH to change any other fields in an inferenceClassificationOverride instance. If an override exists for a sender and the sender changes his/her display name, you can use POST to force an update to the name field in the existing override. If an override exists for a sender and the sender changes his/her SMTP address, deleting the existing override and creating a new one withthe new SMTP address is the only way to 'update' the override for this sender.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassificationOverride
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassificationoverride-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: InferenceClassificationOverride, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<InferenceClassificationOverride | undefined>;
    /**
     * Delete a focused Inbox override specified by its ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<InferenceClassificationOverrideItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Change the classifyAs field of a focused Inbox override as specified. You cannot use PATCH to change any other fields in an inferenceClassificationOverride instance. If an override exists for a sender and the sender changes his/her display name, you can use POST to force an update to the name field in the existing override. If an override exists for a sender and the sender changes his/her SMTP address, deleting the existing override and creating a new one withthe new SMTP address is the only way to 'update' the override for this sender.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: InferenceClassificationOverride, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
 */
export interface InferenceClassificationOverrideItemRequestBuilderGetQueryParameters {
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const InferenceClassificationOverrideItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const InferenceClassificationOverrideItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createInferenceClassificationOverrideFromDiscriminatorValue,
        queryParametersMapper: InferenceClassificationOverrideItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createInferenceClassificationOverrideFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeInferenceClassificationOverride,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const InferenceClassificationOverrideItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/inferenceClassification/overrides/{inferenceClassificationOverride%2Did}{?%24select}";
/* tslint:enable */
/* eslint-enable */