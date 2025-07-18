/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetZebraFotaDeploymentReportPostRequestBody}
 */
// @ts-ignore
export function createGetZebraFotaDeploymentReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetZebraFotaDeploymentReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetZebraFotaDeploymentReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetZebraFotaDeploymentReportPostRequestBody(getZebraFotaDeploymentReportPostRequestBody: Partial<GetZebraFotaDeploymentReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getZebraFotaDeploymentReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getZebraFotaDeploymentReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getZebraFotaDeploymentReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getZebraFotaDeploymentReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getZebraFotaDeploymentReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getZebraFotaDeploymentReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getZebraFotaDeploymentReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getZebraFotaDeploymentReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getZebraFotaDeploymentReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getZebraFotaDeploymentReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetZebraFotaDeploymentReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The filter property
     */
    filter?: string | null;
    /**
     * The groupBy property
     */
    groupBy?: string[] | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The orderBy property
     */
    orderBy?: string[] | null;
    /**
     * The search property
     */
    search?: string | null;
    /**
     * The select property
     */
    select?: string[] | null;
    /**
     * The sessionId property
     */
    sessionId?: string | null;
    /**
     * The skip property
     */
    skip?: number | null;
    /**
     * The top property
     */
    top?: number | null;
}
/**
 * Provides operations to call the getZebraFotaDeploymentReport method.
 */
export interface GetZebraFotaDeploymentReportRequestBuilder extends BaseRequestBuilder<GetZebraFotaDeploymentReportRequestBuilder> {
    /**
     * Invoke action getZebraFotaDeploymentReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetZebraFotaDeploymentReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getZebraFotaDeploymentReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetZebraFotaDeploymentReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetZebraFotaDeploymentReportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetZebraFotaDeploymentReportPostRequestBody(writer: SerializationWriter, getZebraFotaDeploymentReportPostRequestBody: Partial<GetZebraFotaDeploymentReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getZebraFotaDeploymentReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getZebraFotaDeploymentReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getZebraFotaDeploymentReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getZebraFotaDeploymentReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getZebraFotaDeploymentReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getZebraFotaDeploymentReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getZebraFotaDeploymentReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getZebraFotaDeploymentReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getZebraFotaDeploymentReportPostRequestBody.skip);
    writer.writeNumberValue("top", getZebraFotaDeploymentReportPostRequestBody.top);
    writer.writeAdditionalData(getZebraFotaDeploymentReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetZebraFotaDeploymentReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getZebraFotaDeploymentReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetZebraFotaDeploymentReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetZebraFotaDeploymentReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetZebraFotaDeploymentReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
