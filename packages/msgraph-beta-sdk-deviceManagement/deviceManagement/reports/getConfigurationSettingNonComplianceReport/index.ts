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
 * @returns {GetConfigurationSettingNonComplianceReportPostRequestBody}
 */
// @ts-ignore
export function createGetConfigurationSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetConfigurationSettingNonComplianceReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody(getConfigurationSettingNonComplianceReportPostRequestBody: Partial<GetConfigurationSettingNonComplianceReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getConfigurationSettingNonComplianceReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getConfigurationSettingNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getConfigurationSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getConfigurationSettingNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getConfigurationSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getConfigurationSettingNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getConfigurationSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getConfigurationSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getConfigurationSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getConfigurationSettingNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetConfigurationSettingNonComplianceReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the getConfigurationSettingNonComplianceReport method.
 */
export interface GetConfigurationSettingNonComplianceReportRequestBuilder extends BaseRequestBuilder<GetConfigurationSettingNonComplianceReportRequestBuilder> {
    /**
     * Invoke action getConfigurationSettingNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: GetConfigurationSettingNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getConfigurationSettingNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetConfigurationSettingNonComplianceReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetConfigurationSettingNonComplianceReportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetConfigurationSettingNonComplianceReportPostRequestBody(writer: SerializationWriter, getConfigurationSettingNonComplianceReportPostRequestBody: Partial<GetConfigurationSettingNonComplianceReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getConfigurationSettingNonComplianceReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getConfigurationSettingNonComplianceReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getConfigurationSettingNonComplianceReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getConfigurationSettingNonComplianceReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getConfigurationSettingNonComplianceReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getConfigurationSettingNonComplianceReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getConfigurationSettingNonComplianceReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getConfigurationSettingNonComplianceReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getConfigurationSettingNonComplianceReportPostRequestBody.skip);
    writer.writeNumberValue("top", getConfigurationSettingNonComplianceReportPostRequestBody.top);
    writer.writeAdditionalData(getConfigurationSettingNonComplianceReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetConfigurationSettingNonComplianceReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getConfigurationSettingNonComplianceReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetConfigurationSettingNonComplianceReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetConfigurationSettingNonComplianceReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetConfigurationSettingNonComplianceReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
