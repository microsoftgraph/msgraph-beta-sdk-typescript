/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddMembersByIdPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The ids property
     */
    ids?: string[];
    /**
     * The memberEntityType property
     */
    memberEntityType?: string;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a addMembersByIdPostRequestBody
 */
export function createAddMembersByIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddMembersByIdPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
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
     * @see {@link https://learn.microsoft.com/graph/api/windowsupdates-updatableassetgroup-addmembersbyid?view=graph-rest-1.0|Find more info here}
     */
     post(body: AddMembersByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AddMembersByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAddMembersByIdPostRequestBody(writer: SerializationWriter, addMembersByIdPostRequestBody: Partial<AddMembersByIdPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("ids", addMembersByIdPostRequestBody.ids);
    writer.writeStringValue("memberEntityType", addMembersByIdPostRequestBody.memberEntityType);
    writer.writeAdditionalData(addMembersByIdPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphWindowsUpdatesAddMembersByIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddMembersByIdPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphWindowsUpdatesAddMembersByIdRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/deploymentAudiences/{deploymentAudience%2Did}/members/{updatableAsset%2Did}/microsoft.graph.windowsUpdates.addMembersById";
/* tslint:enable */
/* eslint-enable */