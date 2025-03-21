/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCloudCertificationAuthorityLeafCertificateFromDiscriminatorValue, serializeCloudCertificationAuthorityLeafCertificate, type CloudCertificationAuthorityLeafCertificate } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RevokeLeafCertificatePostRequestBody}
 */
// @ts-ignore
export function createRevokeLeafCertificatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRevokeLeafCertificatePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRevokeLeafCertificatePostRequestBody(revokeLeafCertificatePostRequestBody: Partial<RevokeLeafCertificatePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { revokeLeafCertificatePostRequestBody.backingStoreEnabled = true; },
        "leafCertificateId": n => { revokeLeafCertificatePostRequestBody.leafCertificateId = n.getStringValue(); },
    }
}
export interface RevokeLeafCertificatePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The leafCertificateId property
     */
    leafCertificateId?: string | null;
}
/**
 * Provides operations to call the revokeLeafCertificate method.
 */
export interface RevokeLeafCertificateRequestBuilder extends BaseRequestBuilder<RevokeLeafCertificateRequestBuilder> {
    /**
     * Invoke action revokeLeafCertificate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudCertificationAuthorityLeafCertificate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RevokeLeafCertificatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudCertificationAuthorityLeafCertificate | undefined>;
    /**
     * Invoke action revokeLeafCertificate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RevokeLeafCertificatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRevokeLeafCertificatePostRequestBody(writer: SerializationWriter, revokeLeafCertificatePostRequestBody: Partial<RevokeLeafCertificatePostRequestBody> | undefined | null = {}) : void {
    if (revokeLeafCertificatePostRequestBody) {
        writer.writeStringValue("leafCertificateId", revokeLeafCertificatePostRequestBody.leafCertificateId);
        writer.writeAdditionalData(revokeLeafCertificatePostRequestBody.additionalData);
    }
}
/**
 * Uri template for the request builder.
 */
export const RevokeLeafCertificateRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority%2Did}/revokeLeafCertificate";
/**
 * Metadata for all the requests in the request builder.
 */
export const RevokeLeafCertificateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RevokeLeafCertificateRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudCertificationAuthorityLeafCertificateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRevokeLeafCertificatePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
