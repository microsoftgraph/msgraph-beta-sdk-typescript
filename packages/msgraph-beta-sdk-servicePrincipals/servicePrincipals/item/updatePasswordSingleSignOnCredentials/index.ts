/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCredentialFromDiscriminatorValue, serializeCredential, type Credential } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UpdatePasswordSingleSignOnCredentialsPostRequestBody}
 */
export function createUpdatePasswordSingleSignOnCredentialsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUpdatePasswordSingleSignOnCredentialsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoUpdatePasswordSingleSignOnCredentialsPostRequestBody(updatePasswordSingleSignOnCredentialsPostRequestBody: Partial<UpdatePasswordSingleSignOnCredentialsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { updatePasswordSingleSignOnCredentialsPostRequestBody.backingStoreEnabled = true; },
        "credentials": n => { updatePasswordSingleSignOnCredentialsPostRequestBody.credentials = n.getCollectionOfObjectValues<Credential>(createCredentialFromDiscriminatorValue); },
        "id": n => { updatePasswordSingleSignOnCredentialsPostRequestBody.id = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeUpdatePasswordSingleSignOnCredentialsPostRequestBody(writer: SerializationWriter, updatePasswordSingleSignOnCredentialsPostRequestBody: Partial<UpdatePasswordSingleSignOnCredentialsPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfObjectValues<Credential>("credentials", updatePasswordSingleSignOnCredentialsPostRequestBody.credentials, serializeCredential);
    writer.writeStringValue("id", updatePasswordSingleSignOnCredentialsPostRequestBody.id);
    writer.writeAdditionalData(updatePasswordSingleSignOnCredentialsPostRequestBody.additionalData);
}
export interface UpdatePasswordSingleSignOnCredentialsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The credentials property
     */
    credentials?: Credential[];
    /**
     * The id property
     */
    id?: string;
}
/**
 * Provides operations to call the updatePasswordSingleSignOnCredentials method.
 */
export interface UpdatePasswordSingleSignOnCredentialsRequestBuilder extends BaseRequestBuilder<UpdatePasswordSingleSignOnCredentialsRequestBuilder> {
    /**
     * Update single sign-on credentials using a password for a user or group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-updatepasswordsinglesignoncredentials?view=graph-rest-1.0|Find more info here}
     */
     post(body: UpdatePasswordSingleSignOnCredentialsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Update single sign-on credentials using a password for a user or group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UpdatePasswordSingleSignOnCredentialsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const UpdatePasswordSingleSignOnCredentialsRequestBuilderUriTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/updatePasswordSingleSignOnCredentials";
/**
 * Metadata for all the requests in the request builder.
 */
export const UpdatePasswordSingleSignOnCredentialsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: UpdatePasswordSingleSignOnCredentialsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUpdatePasswordSingleSignOnCredentialsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
