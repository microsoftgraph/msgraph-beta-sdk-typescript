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
 * @returns {GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody}
 */
// @ts-ignore
export function createGetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody(getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody: Partial<GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "orderBy": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the getDeviceStatusSummaryByCompliancePolicySettingsReport method.
 */
export interface GetDeviceStatusSummaryByCompliancePolicySettingsReportRequestBuilder extends BaseRequestBuilder<GetDeviceStatusSummaryByCompliancePolicySettingsReportRequestBuilder> {
    /**
     * Invoke action getDeviceStatusSummaryByCompliancePolicySettingsReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getDeviceStatusSummaryByCompliancePolicySettingsReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody(writer: SerializationWriter, getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody: Partial<GetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.groupBy);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.skip);
    writer.writeNumberValue("top", getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.top);
    writer.writeAdditionalData(getDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetDeviceStatusSummaryByCompliancePolicySettingsReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetDeviceStatusSummaryByCompliancePolicySettingsReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetDeviceStatusSummaryByCompliancePolicySettingsReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetDeviceStatusSummaryByCompliancePolicySettingsReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
