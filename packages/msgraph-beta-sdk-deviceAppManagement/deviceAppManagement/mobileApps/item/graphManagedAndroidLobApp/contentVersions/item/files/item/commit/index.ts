/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createFileEncryptionInfoFromDiscriminatorValue, serializeFileEncryptionInfo, type FileEncryptionInfo } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CommitPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The fileEncryptionInfo property
     */
    fileEncryptionInfo?: FileEncryptionInfo;
}
/**
 * Provides operations to call the commit method.
 */
export interface CommitRequestBuilder extends BaseRequestBuilder<CommitRequestBuilder> {
    /**
     * Commits a file of a given app.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: CommitPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Commits a file of a given app.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CommitPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a commitPostRequestBody
 */
export function createCommitPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCommitPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCommitPostRequestBody(commitPostRequestBody: Partial<CommitPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { commitPostRequestBody.backingStoreEnabled = true; },
        "fileEncryptionInfo": n => { commitPostRequestBody.fileEncryptionInfo = n.getObjectValue<FileEncryptionInfo>(createFileEncryptionInfoFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCommitPostRequestBody(writer: SerializationWriter, commitPostRequestBody: Partial<CommitPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<FileEncryptionInfo>("fileEncryptionInfo", commitPostRequestBody.fileEncryptionInfo, serializeFileEncryptionInfo);
    writer.writeAdditionalData(commitPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CommitRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCommitPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CommitRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.managedAndroidLobApp/contentVersions/{mobileAppContent%2Did}/files/{mobileAppContentFile%2Did}/commit";
/* tslint:enable */
/* eslint-enable */