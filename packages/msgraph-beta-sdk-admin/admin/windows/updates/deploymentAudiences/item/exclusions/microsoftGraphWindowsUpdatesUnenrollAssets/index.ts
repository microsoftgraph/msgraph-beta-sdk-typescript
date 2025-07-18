/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUpdatableAssetFromDiscriminatorValue, serializeUpdatableAsset, type UpdatableAsset, UpdateCategory, UpdateCategoryObject } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UnenrollAssetsPostRequestBody}
 */
// @ts-ignore
export function createUnenrollAssetsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUnenrollAssetsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param UnenrollAssetsPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUnenrollAssetsPostRequestBody(unenrollAssetsPostRequestBody: Partial<UnenrollAssetsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assets": n => { unenrollAssetsPostRequestBody.assets = n.getCollectionOfObjectValues<UpdatableAsset>(createUpdatableAssetFromDiscriminatorValue); },
        "backingStoreEnabled": n => { unenrollAssetsPostRequestBody.backingStoreEnabled = true; },
        "updateCategory": n => { unenrollAssetsPostRequestBody.updateCategory = n.getEnumValue<UpdateCategory>(UpdateCategoryObject); },
    }
}
/**
 * Provides operations to call the unenrollAssets method.
 */
export interface MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilder extends BaseRequestBuilder<MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilder> {
    /**
     * Invoke action unenrollAssets
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UnenrollAssetsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action unenrollAssets
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UnenrollAssetsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param UnenrollAssetsPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUnenrollAssetsPostRequestBody(writer: SerializationWriter, unenrollAssetsPostRequestBody: Partial<UnenrollAssetsPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!unenrollAssetsPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfObjectValues<UpdatableAsset>("assets", unenrollAssetsPostRequestBody.assets, serializeUpdatableAsset);
    writer.writeEnumValue<UpdateCategory>("updateCategory", unenrollAssetsPostRequestBody.updateCategory);
    writer.writeAdditionalData(unenrollAssetsPostRequestBody.additionalData);
}
export interface UnenrollAssetsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The assets property
     */
    assets?: UpdatableAsset[] | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The updateCategory property
     */
    updateCategory?: UpdateCategory | null;
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/deploymentAudiences/{deploymentAudience%2Did}/exclusions/microsoft.graph.windowsUpdates.unenrollAssets";
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnenrollAssetsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
