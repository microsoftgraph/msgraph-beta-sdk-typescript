/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSynchronizationJobRestartCriteriaFromDiscriminatorValue, serializeSynchronizationJobRestartCriteria, type SynchronizationJobRestartCriteria } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a restartPostRequestBody
 */
export function createRestartPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRestartPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoRestartPostRequestBody(restartPostRequestBody: Partial<RestartPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { restartPostRequestBody.backingStoreEnabled = true; },
        "criteria": n => { restartPostRequestBody.criteria = n.getObjectValue<SynchronizationJobRestartCriteria>(createSynchronizationJobRestartCriteriaFromDiscriminatorValue); },
    }
}
export interface RestartPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The criteria property
     */
    criteria?: SynchronizationJobRestartCriteria;
}
/**
 * Provides operations to call the restart method.
 */
export interface RestartRequestBuilder extends BaseRequestBuilder<RestartRequestBuilder> {
    /**
     * Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationjob-restart?view=graph-rest-1.0|Find more info here}
     */
     post(body: RestartPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: RestartPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRestartPostRequestBody(writer: SerializationWriter, restartPostRequestBody: Partial<RestartPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<SynchronizationJobRestartCriteria>("criteria", restartPostRequestBody.criteria, serializeSynchronizationJobRestartCriteria);
    writer.writeAdditionalData(restartPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const RestartRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRestartPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RestartRequestBuilderUriTemplate = "{+baseurl}/applications/{application%2Did}/synchronization/jobs/{synchronizationJob%2Did}/restart";
/* tslint:enable */
/* eslint-enable */