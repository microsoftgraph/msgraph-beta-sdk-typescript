/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddMembersByIdPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddMembersByIdPostRequestBody}
 */
// @ts-ignore
export function createAddMembersByIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddMembersByIdPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param AddMembersByIdPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAddMembersByIdPostRequestBody(addMembersByIdPostRequestBody: Partial<AddMembersByIdPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { addMembersByIdPostRequestBody.backingStoreEnabled = true; },
        "ids": n => { addMembersByIdPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
        "memberEntityType": n => { addMembersByIdPostRequestBody.memberEntityType = n.getStringValue(); },
    }
}
/**
 * Provides operations to call the addMembersById method.
 */
export interface MicrosoftGraphWindowsUpdatesAddMembersByIdRequestBuilder extends BaseRequestBuilder<MicrosoftGraphWindowsUpdatesAddMembersByIdRequestBuilder> {
    /**
     * Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/windowsupdates-updatableassetgroup-addmembersbyid?view=graph-rest-beta|Find more info here}
     */
     post(body: AddMembersByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AddMembersByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param AddMembersByIdPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAddMembersByIdPostRequestBody(writer: SerializationWriter, addMembersByIdPostRequestBody: Partial<AddMembersByIdPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!addMembersByIdPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<string>("ids", addMembersByIdPostRequestBody.ids);
    writer.writeStringValue("memberEntityType", addMembersByIdPostRequestBody.memberEntityType);
    writer.writeAdditionalData(addMembersByIdPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphWindowsUpdatesAddMembersByIdRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/deployments/{deployment%2Did}/audience/exclusions/{updatableAsset%2Did}/microsoft.graph.windowsUpdates.addMembersById";
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphWindowsUpdatesAddMembersByIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: MicrosoftGraphWindowsUpdatesAddMembersByIdRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddMembersByIdPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
