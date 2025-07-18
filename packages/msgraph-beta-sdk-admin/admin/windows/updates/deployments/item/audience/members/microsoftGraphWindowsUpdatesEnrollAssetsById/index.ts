/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { UpdateCategory, UpdateCategoryObject } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EnrollAssetsByIdPostRequestBody}
 */
// @ts-ignore
export function createEnrollAssetsByIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEnrollAssetsByIdPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param EnrollAssetsByIdPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEnrollAssetsByIdPostRequestBody(enrollAssetsByIdPostRequestBody: Partial<EnrollAssetsByIdPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { enrollAssetsByIdPostRequestBody.backingStoreEnabled = true; },
        "ids": n => { enrollAssetsByIdPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
        "memberEntityType": n => { enrollAssetsByIdPostRequestBody.memberEntityType = n.getStringValue(); },
        "updateCategory": n => { enrollAssetsByIdPostRequestBody.updateCategory = n.getEnumValue<UpdateCategory>(UpdateCategoryObject); },
    }
}
export interface EnrollAssetsByIdPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The ids property
     */
    ids?: string[] | null;
    /**
     * The memberEntityType property
     */
    memberEntityType?: string | null;
    /**
     * The updateCategory property
     */
    updateCategory?: UpdateCategory | null;
}
/**
 * Provides operations to call the enrollAssetsById method.
 */
export interface MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilder extends BaseRequestBuilder<MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilder> {
    /**
     * Invoke action enrollAssetsById
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: EnrollAssetsByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action enrollAssetsById
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EnrollAssetsByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param EnrollAssetsByIdPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEnrollAssetsByIdPostRequestBody(writer: SerializationWriter, enrollAssetsByIdPostRequestBody: Partial<EnrollAssetsByIdPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!enrollAssetsByIdPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<string>("ids", enrollAssetsByIdPostRequestBody.ids);
    writer.writeStringValue("memberEntityType", enrollAssetsByIdPostRequestBody.memberEntityType);
    writer.writeEnumValue<UpdateCategory>("updateCategory", enrollAssetsByIdPostRequestBody.updateCategory);
    writer.writeAdditionalData(enrollAssetsByIdPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/deployments/{deployment%2Did}/audience/members/microsoft.graph.windowsUpdates.enrollAssetsById";
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEnrollAssetsByIdPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
