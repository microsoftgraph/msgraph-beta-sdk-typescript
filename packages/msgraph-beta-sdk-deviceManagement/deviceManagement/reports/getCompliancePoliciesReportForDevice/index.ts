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
 * @returns {GetCompliancePoliciesReportForDevicePostRequestBody}
 */
// @ts-ignore
export function createGetCompliancePoliciesReportForDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetCompliancePoliciesReportForDevicePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetCompliancePoliciesReportForDevicePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetCompliancePoliciesReportForDevicePostRequestBody(getCompliancePoliciesReportForDevicePostRequestBody: Partial<GetCompliancePoliciesReportForDevicePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getCompliancePoliciesReportForDevicePostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getCompliancePoliciesReportForDevicePostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getCompliancePoliciesReportForDevicePostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getCompliancePoliciesReportForDevicePostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getCompliancePoliciesReportForDevicePostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getCompliancePoliciesReportForDevicePostRequestBody.search = n.getStringValue(); },
        "select": n => { getCompliancePoliciesReportForDevicePostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getCompliancePoliciesReportForDevicePostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getCompliancePoliciesReportForDevicePostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getCompliancePoliciesReportForDevicePostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetCompliancePoliciesReportForDevicePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the getCompliancePoliciesReportForDevice method.
 */
export interface GetCompliancePoliciesReportForDeviceRequestBuilder extends BaseRequestBuilder<GetCompliancePoliciesReportForDeviceRequestBuilder> {
    /**
     * Invoke action getCompliancePoliciesReportForDevice
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetCompliancePoliciesReportForDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getCompliancePoliciesReportForDevice
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetCompliancePoliciesReportForDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetCompliancePoliciesReportForDevicePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetCompliancePoliciesReportForDevicePostRequestBody(writer: SerializationWriter, getCompliancePoliciesReportForDevicePostRequestBody: Partial<GetCompliancePoliciesReportForDevicePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getCompliancePoliciesReportForDevicePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getCompliancePoliciesReportForDevicePostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCompliancePoliciesReportForDevicePostRequestBody.groupBy);
    writer.writeStringValue("name", getCompliancePoliciesReportForDevicePostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCompliancePoliciesReportForDevicePostRequestBody.orderBy);
    writer.writeStringValue("search", getCompliancePoliciesReportForDevicePostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getCompliancePoliciesReportForDevicePostRequestBody.select);
    writer.writeStringValue("sessionId", getCompliancePoliciesReportForDevicePostRequestBody.sessionId);
    writer.writeNumberValue("skip", getCompliancePoliciesReportForDevicePostRequestBody.skip);
    writer.writeNumberValue("top", getCompliancePoliciesReportForDevicePostRequestBody.top);
    writer.writeAdditionalData(getCompliancePoliciesReportForDevicePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetCompliancePoliciesReportForDeviceRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getCompliancePoliciesReportForDevice";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetCompliancePoliciesReportForDeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetCompliancePoliciesReportForDeviceRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetCompliancePoliciesReportForDevicePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
