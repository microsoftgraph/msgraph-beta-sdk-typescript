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
 * @returns {GetDeviceInstallStatusReportPostRequestBody}
 */
export function createGetDeviceInstallStatusReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetDeviceInstallStatusReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoGetDeviceInstallStatusReportPostRequestBody(getDeviceInstallStatusReportPostRequestBody: Partial<GetDeviceInstallStatusReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getDeviceInstallStatusReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getDeviceInstallStatusReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceInstallStatusReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getDeviceInstallStatusReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getDeviceInstallStatusReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceInstallStatusReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceInstallStatusReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceInstallStatusReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceInstallStatusReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceInstallStatusReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetDeviceInstallStatusReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The filter property
     */
    filter?: string;
    /**
     * The groupBy property
     */
    groupBy?: string[];
    /**
     * The name property
     */
    name?: string;
    /**
     * The orderBy property
     */
    orderBy?: string[];
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
    /**
     * The sessionId property
     */
    sessionId?: string;
    /**
     * The skip property
     */
    skip?: number;
    /**
     * The top property
     */
    top?: number;
}
/**
 * Provides operations to call the getDeviceInstallStatusReport method.
 */
export interface GetDeviceInstallStatusReportRequestBuilder extends BaseRequestBuilder<GetDeviceInstallStatusReportRequestBuilder> {
    /**
     * Invoke action getDeviceInstallStatusReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetDeviceInstallStatusReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getDeviceInstallStatusReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetDeviceInstallStatusReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetDeviceInstallStatusReportPostRequestBody(writer: SerializationWriter, getDeviceInstallStatusReportPostRequestBody: Partial<GetDeviceInstallStatusReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getDeviceInstallStatusReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceInstallStatusReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getDeviceInstallStatusReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceInstallStatusReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getDeviceInstallStatusReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceInstallStatusReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getDeviceInstallStatusReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getDeviceInstallStatusReportPostRequestBody.skip);
    writer.writeNumberValue("top", getDeviceInstallStatusReportPostRequestBody.top);
    writer.writeAdditionalData(getDeviceInstallStatusReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetDeviceInstallStatusReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getDeviceInstallStatusReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetDeviceInstallStatusReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetDeviceInstallStatusReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetDeviceInstallStatusReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
